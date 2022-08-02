const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDB');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    name: String,
    author : String,
    imageUrl : String,
    description : String
});

var BookData = mongoose.model('books', NewBookSchema);                  

module.exports = BookData;