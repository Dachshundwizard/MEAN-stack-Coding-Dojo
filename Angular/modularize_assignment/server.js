var express = require('express'),
    path    = require('path'),
    bp      = require('body-parser'), // Middleware to parse information out of HTTP requests made to our server. Use bp if you want the form data to be available in req.body.
    root    = __dirname,
    port    = process.env.PORT || 8000,
    app     = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json() );

app.listen(port, function() {
    console.log('Server running on port ' + port);
    console.log(`Server running on port ${port}`);

})
