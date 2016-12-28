// In this file, we are only going to use the express router, not the full express app
// Require express
var express = require('express');
// Instantiate the express router
var router = express.Router();

// Re-define the JSON route

router
    .route('/json') // Define the route
    .get(function(req, res) {
        console.log("GET the json");
        res
          .status(200) // Changed status code here, check it inside console.
          .json( {"jsonData" : true} );
    })
    .post(function(req, res) {
        console.log("POST the json");
        res
          .status(200)
          .json( {"jsonData" : "POST received"} );
    });


// We want to exports the router that we instantiated
module.exports = router;
