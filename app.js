var http = require('http');
var request = require('request');
var imdbId = process.argv[2];
var port = 1776;
var url = 'http://www.omdbapi.com/?i=' + imdbId;

var server = http.createServer(requestHandler);
console.log(imdbId);

function requestHandler(req, res){
  request(url, function (error, response, body) {
    if (error){
      res.end('Something went wrong dude');
    } else if (!error && response.statusCode == 200) {
      console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.end(body) // Show the HTML for the Google homepage.
    }
  })
}

server.listen(port, function(){
  console.log("Server is listening on "+port);
})

