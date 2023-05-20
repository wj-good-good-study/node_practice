const express = require('express')
const path = require('path')
const app = express()



app.use((req, res, next) => {
    const referer = req.get('referer')
    if (referer) {
        const url = new URL(referer)
        if (url.hostname !== '127.0.0.1') {
            res.status(404).send('Not Found')
            return
        }
    }
    next()
})

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000, () => {
    console.log('服务启动了')
})