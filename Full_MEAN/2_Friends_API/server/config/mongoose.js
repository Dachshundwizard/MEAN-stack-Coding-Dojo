console.log('mongo connection, mongoose setup');
//This file is complete other than changing our DB
var mongoose = require('mongoose'),
    /*
     *  Require file-system so that we can load, read, require all of the model files.
     *  FS module provides ability to read and write files. Reading is how we obtain the content to serve the clients, and writing is how we output content to the client.
     */
    fs = require('fs'),
    /*
     *  utilize path for easy dir/file joining
     */
    path = require('path'),
    /*
     *  Dir where our models are located
     */
    models_path = path.join(__dirname, "../models"),

    // Connect to the database.

    dbURI = 'mongodb://localhost/friends';

mongoose.connect(dbURI);

// Connection events when successfully connected

mongoose.connection.on('connected', function() {
    console.log(`Mongoose default connection open to ${dbURI}`);
});

// If the connection throws an error

mongoose.connection.on('error', function(err) {
    console.error(`Mongoose default connection error:${err}`);
});

// When the connection is disconnected

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination.');
        process.exit(0);
    });
});
fs.readdirSync(models_path).forEach(function(file) {
    if (/\.js$/i.test(file)) {
        require(path.join(models_path, file));
    }
});
