const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
   
    author_name: String,
    age:Number,
    address:String,
    rating:String
    // 62244de322fe2e8608995834

}, );

module.exports = mongoose.model('NewAuthor', authorSchema)
