const express = require('express')
const router = express.Router()
const UserModel = require('../../models/UserModles')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const {SECRET} = require('../../config/config')

router.post('/login', (req, res) => {
    let { username, password } = req.body
    UserModel.findOne({ username, password: md5(password) }).then(data => {
        if (!data) {
            return res.json({
                code: '2002',
                msg: '账号或密码错误',
                data: null
            })
        }
        // 响应token
        let token = jwt.sign({
            username: username,
            _id: data._id
        }, SECRET, {
            expiresIn: 60 * 60 * 24 * 7
        })
        res.json({
            code: '0000',
            msg: '登陆成功',
            data: token
        })
    }).catch(err => {
        res.json({
            code: '2001',
            msg: '数据库读取失败',
            data: null
        })
    })
})

router.post('/loginout', (req, res) => {
    // req.session.destroy(() => {
    //     res.render('success', { msg: '退出成功', url: '/login' })
    // })
})
module.exports = router