// Standard express setup
var express = require('express'),
app = express(),
path = require('path');

app.use(express.static(path.join(__dirname, './client'))); // When we turn the server on, its going to go look into bower_components
app.use(express.static(path.join(__dirname, './bower_components'))); // and client and look for index.html file and load it

app.listen(8000, function() {});
