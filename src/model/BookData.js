const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/LibraryDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const Schema = mongoose.Schema;
var NewBookSchema = new Schema({
    name: String,
    author : String,
    imageUrl : String,
    description : String
});

var BookData = mongoose.model('books', NewBookSchema);                  

module.exports = BookData;