const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Fathimanizar:fathimanabianoob@testcluster.cv1hp4e.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewCredentialSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    confirm_password: String
   
});

var UserData = mongoose.model('userdatas', NewCredentialSchema);                        //UserData is the model and NewBookData is the schema

module.exports = UserData;