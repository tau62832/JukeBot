var http = require("http");
var express = require('express');
var cors = require('cors');
var app = express()
app.use(cors())
  /* Create an HTTP server to handle responses */

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
