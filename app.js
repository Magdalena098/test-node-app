var express = require("express");
// var cors = require("cors");

var app = express();
var request = require('request'); 
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {res.render('index')});

app.get('/searching', function(req, res){
  
    const name = req.query.city;

  request('https://data.gov.uk/data/api/service/health/clinics?city=' + name, function(err, body){
      res.send(body);
  });
});



app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;