const request = require('request');
// This takes two arguments. The first one is going to be an options object.
// The second is going to be a callback function. Which will be called once we get data back.
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
request({ // Here we are specifying the things unique to our request
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20stree%20philidelphia',
    json: true // this tells request that the data we are getting back is JSON data and it will covert the JSON string and convert it to an object for us. 
}, (error, response, body) => {

});
