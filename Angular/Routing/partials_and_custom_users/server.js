var express = require('express'),                                     // This gives us access to the express module.
    path    = require('path'),                                        // The path module contains several helper functions to help make path manipulation easier (path.normalize)(path.join)
    root    = __dirname,                                              // Setting 'root' as the directory name of the current module (__dirname is local to each module)
    port    = process.env.PORT || 8000,                               // Setting port to be by default 8000, or whatever is in the environment variable PORT
    app     = express();                                              // Calls the express function

app.use(express.static(path.join(root, 'client')));                   // Using the built-in middleware function in Express, this is how we can serve static files(images, css, js)
