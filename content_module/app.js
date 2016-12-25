var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    static_contents = require('./modules/static.js');

server = http.createServer(function(req, res){
    static_contents(req, res);
});
server.listen(8000);
console.log("Running in localhost at port 8000");
