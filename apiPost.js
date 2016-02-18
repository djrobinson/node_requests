var http = require('http');
var request = require('request');
var keys = require('./keys');
var port = 1776;
var url = 'https://www.googleapis.com/urlshortener/v1/url?key=';
var args = process.argv[2];


var server = http.createServer(requestHandler);

var options = {
  method: 'POST',
  url: url,
  qs: { key: keys },
  headers: {
    'content-type': 'application/json'
  },
  body: {longUrl: args},
  json: true
}

function requestHandler(req, res){
  request.post(options, function(err, response, body){
    if (err){
      console.error(err);
    } else {
      console.log(JSON.stringify(body));
      res.end(JSON.stringify(body));
    }
  })
}

server.listen(port, function(){
  console.log("app is listening on " + port);
})