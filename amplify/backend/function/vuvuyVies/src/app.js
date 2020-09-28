
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var soap = require('soap');  

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// create application/json parser
var jsonParser = bodyParser.json()

app.post('/checkVatService', jsonParser, function(req, res) {

  var wsdl = 'https://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl';
  var args = {countryCode: req.body.countryCode, vatNumber: req.body.vatNumber};
  
  soap.createClient(wsdl, function(err, client) {
      client.checkVat(args, function(err, result) {
        res.json(result)
      });
  });
});

module.exports = app
