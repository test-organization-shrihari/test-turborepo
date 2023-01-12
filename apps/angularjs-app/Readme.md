# To Test PRTUI-1264 on your local machine

cd angularjs-app
npm install (should install dependencies in node_modules folder)
npm run build (should build angularjs project with webpack and create a build folder in directory)
node ./server.js (This should start a server on port 3000 )

set SHOW_REACT_PAGES=true in .env file
start react-portal application in another terminal


