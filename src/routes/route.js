const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const BookModel = require("../models/bookModel")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser", UserController.createUser)
router.get("/getUserData", UserController.getUsersData)




router.post("/createBook", BookController.createBook)
router.get("/getBookbyChetanBhagat", BookController.getBooksbyChetanBhagat)
router.get("/authorofBook", BookController.authorofBook)
router.get("/bookdetails",BookController.bookBetween50_100)
router.get("/getbook/:Author_id",BookController.getbookbyid)
router.get("/authormorethan50",BookController.authormorethan50)

module.exports = router;