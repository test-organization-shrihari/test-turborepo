const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies: deps } = require('./package.json');

module.exports = function (env = {}) {
    const isProd = !!env.prod;
    const buildpath = env.buildpath ? env.buildpath : isProd ? 'dist' : 'build';
    return  {
    entry: './app/bootstrap.js',
    output: {
        path: path.resolve(__dirname, buildpath),
        filename: 'app.bundle.js',
        clean: true

    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            },
            { test: /\.html$/, loader: "html-loader"},
            {
                test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]}
        ]
    },

    plugins:[
        new ModuleFederationPlugin({
            name: 'angularApp',
            library: { type:'var', name:'angularApp'},
            filename: 'remoteEntry.js',
            exposes:{
                './Angular': path.resolve(__dirname, 'app/bootstrap.js'),
            }
        }),
        new HtmlWebpackPlugin({
            template: `./views/index.ejs`,
            minify: false,
            title:'ang',
        }),
    ]

    }
}