require('dotenv').config();
var express = require('express');

var port = process.env.PORT;
var app = express();

app.get('/', function(req, res){
  res.json({message: "Hello"});
})

console.log(process.env);

app.listen(Number(port), function(){
  console.log('Server running on port', port);
});
