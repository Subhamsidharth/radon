const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   name:{type:String},
   author_id:{type:Number},
   price:{type:Number},
   ratings:{type:Number}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
