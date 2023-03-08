'use strict';

var express = require('express');
var app = express();

app.set("port", process.env.PORT || 4000);

app.get('/vcc', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/vcc/1.0/token', function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var response = { "response" : "This is GET token method." }
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/vcc/1.0/token', function (req, res) {
  console.log(req.body);
  //res.writeHead(200, {'Content-Type': 'application/json'});
  var response = { "response" : "This is token POST method." }
  console.log(response);
  res.send({
          "access_token": "eyJz93k4laUWw",
          "token_type": "Bearer asc",
          "expires_in": 3600,
  });
})

app.post('/vcc/1.0/posts/:postId/messages', function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var response = { "response" : "This is token POST method." }
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
