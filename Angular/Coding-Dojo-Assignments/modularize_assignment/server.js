var express = require('express'),
    path    = require('path'),
    // bp      = require('body-parser'), // Middleware to parse information out of HTTP requests made to our server. Use bp if you want the form data to be available in req.body.
    root    = __dirname,
    port    = process.env.PORT || 8080,
    app     = express();

app.use(express.static(path.join(root, 'client')));
// app.use(bp.json() );
app.use(express.static(__dirname + '/app'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(port, function() {
    console.log('Server running on port ' + port);
    console.log(`Server running on port ${port}`);

});
