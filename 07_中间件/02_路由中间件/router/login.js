const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

const router = express.Router()

const urlencodeedParser = bodyParser.urlencoded({extended: false})

function loginMiddleware(req, res, next) {
    if (req.query.id === '1') {
        next()
    } else {
        next('error')
    }
}

// router.use(loginMiddleware)

router.get('/login', loginMiddleware, (req, res) => {
    res.send('login')
})

router.post('/login', urlencodeedParser, (req, res) => {
    console.log(req.body)
    res.send(`${req.body.id},${req.body.name}`)
})




module.exports = router