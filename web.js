var express = require('express');
var fs = require('fs');
var bufx = new Buffer(3000);
var app = express.createServer(express.logger());

bufx = fs.readFileSync("index.html");
var buffstring = bufx.toString('utf-8');


// console.log("Buffer contains " + bufx);
// console.log("buffstring contains " + buffstring);

app.get('/', function(request, response) {
  response.send(buffstring);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

