const express = require('express');
const path = require('path');
const app = express();
// Static Middleware
app.use(express.static(path.join(__dirname, 'build')))
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', function(req, res){
    res.render('index')
})
  
app.listen(3002, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})
