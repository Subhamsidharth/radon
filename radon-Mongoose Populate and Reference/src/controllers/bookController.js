const { count } = require("console")
const authorModel = require("../models/authorModel")
// const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// const getBooksData = async function (req, res){
//     let bo = await bookModel.find().populate( 'author publisher')
//     res.send({msg : bo})
// }

const createBook= async function (req, res) {
    let book = req.body
    let authorid = book.author
    let publisherId = book.publisher

    // author
    if(!authorid) return res.send('authorid is requiired')

    let validA = await authorModel.findById(authorid)
    if(!validA) return res.send('not a valid author_id')
// publisher
    if (!publisherId) return res.send('publissher_id is required')

    let validP = await publisherModel.findById(publisherId)
    if(!validP) res.send('not a valid publisher')

    let bookCreated = await bookModel.create(book)
    res.send({Data: bookCreated})
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find().populate('author publisher')
//     res.send({data: books})
// }

// const boolean =async function(req, res){
//     let book = req.body
//     let value = await bookModel.updateMany(
//         {author_name : "Penguin"},
//         {hardCover : true},
//         {new : true}
//     ).find().count()
//     res.send({msg : value})



// }

const getBooksWithAuthorDetails = async function (req, res) {
    let book = await bookModel.updateMany(
        {ratings : {$gt: 3.5}},
        {$inc : {price : 10}},
        {new : true}

    ).find();
    res.send({msg : book})
}



module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.boolean = boolean
