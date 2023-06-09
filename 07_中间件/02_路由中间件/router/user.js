const express = require('express')
const app = express()
const router = express.Router()

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id',(req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
},(req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id',(req, res, next) => {
    // 如果 user id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route')
    // 负责将控制权交给栈中下一个中间件
    else next() //
},(req, res, next) => {
    // 渲染常规页面
    res.render('regular')
})

// 处理 /user/:id， 渲染一个特殊页面
// router.get('/user/:id',(req, res, next) => {
//     res.send(req.params.id)
// })
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.send('111')
})


module.exports = router