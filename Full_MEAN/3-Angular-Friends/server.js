var express = require('express');
var path    = require('path'); // The path module provides utilities for working with file and directory paths
var bp  	= require('body-parser'); // Extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with
var app 	= express();

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app); // Since routes.js exports is a function
										   // we must invoke it and pass it app!
app.listen(8000, function(){
	console.log('Listening on port 8000');
});
