var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/certs/tls.key', 'utf8');
var certificate = fs.readFileSync('/certs/tls.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(2900);
httpsServer.listen(3000);
const ip = 'localhost'

app.get('*', (req, res) => {
  var url = "http://" + ip + ":444" + req.url;
  console.log(url);
  res.redirect(307,url);
});

app.post('*', (req, res) => {
    var url = "http://" + ip + ":444" + req.url;
    console.log(url);
    res.redirect(307,url);
});