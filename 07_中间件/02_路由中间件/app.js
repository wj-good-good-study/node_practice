const express = require('express')
const login = require('./router/login')
const user = require('./router/user')

const app = express()
app.use('/login', login)
app.use('/user', user)
app.listen(81, () => {
    console.log('模块化路由服务器启动成功')
})