const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id: {
        type: String,
        unique: true,
        required: true
    },
    author_name: { type: String },
    age: { type: Number },
    address: { type: String }
}, {
    timestamps: true
})
module.exports = mongoose.model('Author', authorSchema)