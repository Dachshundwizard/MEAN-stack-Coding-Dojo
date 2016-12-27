var express = require("express");
var path = require("path"); // It is already included, so we can just require it
var bodyParser = require("body-parser");

var app = express(); // Invoked
app.use(bodyParser.urlencoded()); // In order to read HTTP POST data, we have to use "body-parser". It is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// We need a routing file
var route = require("./routes/index.js")(app);
app.listen(3000, function() {
    console.log("listening on port 3000!");
})
