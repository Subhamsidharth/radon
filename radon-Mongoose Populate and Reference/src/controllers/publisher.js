const publisherModel = require('../models/publisherModel')

const createPublisher = async function(req, res) {
    let pub = req.body
    let pubd = await publisherModel.create(pub)
    res.send({msg : pubd})
}

const getPublisher = async function(req, res) {
    let data = req.body
    let getPublishe = await publisherModel.find(data)
    res.send({msg :getPublishe}) 

}

module.exports.getPublisher = getPublisher

module.exports.createPublisher = createPublisher


