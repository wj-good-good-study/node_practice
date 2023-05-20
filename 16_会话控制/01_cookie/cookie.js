const cookieParser = require('cookie-parser')
const express = require('express')
const md5 = require('md5')

const app = express()
// app.use(cookieParser())
app.use(cookieParser('salt'))

app.get('/set-cookie', (req, res) => {
    // res.cookie('name','wangjie') // 会在浏览器关闭时销毁
    // res.cookie('name',md5('liqiang'),{maxAge: 1000 * 60}) // 保存时间
    res.cookie('name','liqiang',{maxAge: 1000 * 60,signed:true}) // 保存时间
    res.send('ok')
})
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('name')
    res.send('ok')
})
app.get('/get-cookie', (req, res) => {
    res.send(req.cookies)
})

app.listen(81)