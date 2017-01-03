var mongoose = require('mongoose');
// Create a Schema
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})
// register the schema as a model
var Quote = mongoose.model('Quote', QuoteSchema);
