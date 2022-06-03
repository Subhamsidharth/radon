const express = require('express');
const router = express.Router();

let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

router.get('/movies', function (req, res) {
    return res.send({ movies: movies })
})

router.get('/movie/:indexNumber', function (req, res) {
    let number = req.params.indexNumber
    if (number > movies.length - 1) {
        return res.send({ msg: 'Not a valid index' })
    }
    return res.send({ Data: `Your required movie is` + " " + movies[number] })
})

router.get('/movie', function (req, res) {
    let number = req.query.indexNumber
    return res.send({ Data: `Your required movie is` + " " + movies[number] })
})

let flims = [
    {
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

router.get('/flim', function (req, res) {
    return res.send({ flim: flims })
})

router.get('/flims/:flimid', function (req, res) {
    let i = req.params.flimid
    for (let i=0;i>flimid.length-1;i++)
    {
        return res.send({
            msg: "No movie exists with this id"


        })
    }
    return res.send({ Data: `Your required flim is` + " " + flims[flimid] })
})




module.exports = router;
