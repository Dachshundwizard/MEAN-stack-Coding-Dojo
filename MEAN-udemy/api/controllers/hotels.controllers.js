// The controllers are managing the logic and the functionality of the routes

var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    console.log("GET the hotels");
    console.log(req.query);
    res
      .status(200)
      .json( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
    var hotelId = req.params.hotelId; // This comes through the request object
    var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);
    res
      .status(200)
      .json( thisHotel );
};
