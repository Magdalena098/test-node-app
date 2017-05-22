// dependencies
var express = require("express");
var cors = require("cors");
var app = express();
var request = require('request'); 
var path = require('path');
var http = require('http');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(app.router);

//index route
app.get('/', function(req, res) {res.render('index')});
//second route
app.get('/searching', function(req, res){

  var val = req.query.city;

  var url = 'https://data.gov.uk/data/api/service/health/clinics?city=' + val;
  console.log(url);

request(url, function(err, resp, body) {
    body = JSON.parse(body);
	    city = body.result[0].city;
        postcode = body.result[0].postcode;
        name = body.result[0].name;
        organisation = body.result[0].organisation_id;
	    results = city + " " + postcode + " " + name + " " + organisation;
	    // pass back the results to client side	
       res.send(results);
    });
});


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;