const AuthorModel= require("../models/authormodels")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({message: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await AuthorModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData