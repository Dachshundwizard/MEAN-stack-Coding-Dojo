// In this file, we are only going to use the express router, not the full express app
// Require express
var express = require('express');
// Instantiate the express router
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');

// Re-define the JSON route

router
    .route('/hotels') // Define the route
    .get(ctrlHotels.hotelsGetAll); // Mapping a controller to a route

router
    .route('/hotels/:hotelId') // Define the route , hotelId is the perameter
    .get(ctrlHotels.hotelsGetOne); // Mapping a controller to a route. Define a controller name as 'hotelsGetOne'
// We want to exports the router that we instantiated
module.exports = router;
