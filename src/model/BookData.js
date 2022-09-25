const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Fathimanizar:fathimanabianoob@testcluster.cv1hp4e.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    name: String,
    author : String,
    imageUrl : String,
    description : String
});

var BookData = mongoose.model('books', NewBookSchema);                  

module.exports = BookData;