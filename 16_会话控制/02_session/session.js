const session = require('express-session')
const MongoStore = require('connect-mongo')
// const Store = require('express-mysql-session')(session)
const express = require('express')

const app = express()

// const options = {
//     host:"localhost",
//     user:"root",
//     password:"sql2008",
//     port:"3306",
//     database:"books"
// }

app.use(session({
    name: 'sessionid', // cookie的name
    secret: 'salt', // 密钥，提高加密等级，加盐
    saveUninitialized: false, // 是否为每个请求都创建新的cookie来存储session的id
    resave: true, // 重新保存，每次请求重新保存session，更新session
    // store: new Store(options),
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/project' // 数据库连接配置
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 1 // 设置session过期时间，数据库中也会过期
    }
}))

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/login', (req, res) => {
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        req.session.username = 'admin'
        res.send('成功')
    } else {
        res.send('失败')
    }
})

app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send('购物车')
    } else {
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('logout success')
    })
})

app.listen(3000, () => console.log('running on 3000'))