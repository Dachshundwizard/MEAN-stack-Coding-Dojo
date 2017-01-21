var express = require('express');
var app = express();
var path = require('path');
var port = 9000;

app.use(express.static(path.join(__dirname, "./static")));

app.listen(8000, function() {
 console.log(`Listening on port over ${port}!!!!!!`);
})
