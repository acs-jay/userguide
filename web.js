var http = require('http');
var url = require('url');
var send = require('send');
var querystring = require('querystring');
var request = require('request');

var port = process.env.PORT || 5000;

var app = http.createServer(function(req, res){

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  var queryDataPathname = url.parse(req.url);
  var pathname = queryDataPathname.pathname;

  console.log(pathname);

  switch(pathname) { // req.url


  default:

      // your custom error-handling logic:
      function error(err) {
        res.statusCode = err.status || 500;
        res.end(err.message);
      }

      // your custom directory handling logic:
      function redirect() {
        res.statusCode = 301;
        res.setHeader('Location', req.url + '/');
        res.end('Redirecting to ' + req.url + '/');
      }

      // transfer arbitrary files from within
      // /www/example.com/public/*
      send(req, url.parse(req.url).pathname)
      .root('./app')
      .on('error', error)
      .on('directory', redirect)
      .pipe(res);

}

}).listen(process.env.PORT || 5000);  // 1337, '127.0.0.1'
 console.log('Server running on Heroku');

//}).listen(1337);  // 1337, '127.0.0.1'
//console.log('Server running locally at 127.0.0.1:1337');