const request = require('request'); // This is coming from npm
// This takes two arguments. The first one is going to be an options object.
// The second is going to be a callback function. Which will be called once we get data back.
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
const yargs = require('yargs');
const argv = yargs.options({ // Passing in an object to configure all the options we need
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true // This tells yargs to always parse the 'a'(address arguement) as a string
    }
}) // This is going to be the object that stores the final parsed output.
request({ // Here we are specifying the things unique to our request
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20stree%20philidelphia',
    json: true // this tells request that the data we are getting back is JSON data and it will covert the JSON string and convert it to an object for us.
}, (error, response, body) => { // When you make a request to a website, and data comes back, that is the body.
    // Format objects to print them to the console.
    console.log(`Address: ${body.results[0].formatted_address}`); // This was taken from the Google Chrome JSON reader extension
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitute: ${body.results[0].geometry.location.lng}`);
// console.log(JSON.stringify(body, undefined, 2)); // Takes your javascript objects (body-in this case) // Undefined is basically making it do nothing, this area is for filtering// the third arguement will format the JSON, and this specifies how many spaces I want per indentation.
// This was a real callback function use, instead of the normal 'setTimeout'. This was fired once the data from the HTTP request came back.
});
