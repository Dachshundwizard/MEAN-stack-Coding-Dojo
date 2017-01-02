// require these dependancies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'), // Makes it easier to designate paths
    port = 8000,
    app = express();

// Set up bodyParser to parse form data, since we need to handle post data for adding a new user
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database connection, schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

// The model represents all of the collections. All of the data inside of our database.
// Schema is created to outline the shape of our data before we throw it into our database // Blueprint of our data
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
});

// Model will take our blueprint and couple it with the name of the collection in our mongo database
var Quote = mongoose.model('quotes', QuoteSchema); // It's time to create a model with two arguments 1. What is the name of it in our database? 2. Give it a blueprint to run off of

// point server to Views
app.set('views', path.join(__dirname, './views')); // Telling express that this is the path for our views
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the 'app' variable
routes_setter(app);
// require will first run the file at the given location (routes.js) and then return whatever is in module.exports
// we then invoke the function passing it our app variable as an argument which sets up all of our route handlers!


// Here are our routes!
app.get('/', function(req, res){
    res.render('index');
});

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, results){
        if(err) { console.log(err); }
        res.render('quotes', { quotes: results });
    });
});

app.post('/quotes', function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("something went wrong!");
        } else {
            res.redirect('/main');
        }
    })
})

app.get('/main', function(req, res){
    Quote.find({}, function(err, quotes){
        res.render('main', {quotes:quotes});
    });
})

app.post('/quotes', function(req, res){ // When post request hits quotes, we will redirect to quotes
    // console.log(req.body); // I did this to see what the req.body looked like, and then I decided to pass req.body into quote.create(res.body
    Quote.create(req.body, function(err){
        if(err) { console.error(err); }
        res.redirect('/quotes');
    });
});

app.listen(port);
