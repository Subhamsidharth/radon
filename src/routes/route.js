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


//router.post("/createAuthor", BookController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getBookbyChetanBhagat", BookController.getBooksbyChetanBhagat)

//router.get("/authorofBook", BookController.authorOfBook)

module.exports = router;