const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

function recordMiddleware(req,res,next) {
    fs.appendFileSync(path.resolve(__dirname,'../record.txt'),`${req.url} ${req.ip}`)
    next()
}

router.use(recordMiddleware)

router.get('/login', (req, res) => {
    res.send('login')
})


module.exports = router