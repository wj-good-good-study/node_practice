const express = require('express')
const router = express.Router()
const UserModel = require('../../models/UserModles')
const md5 = require('md5')
const JWT = require('../../utils/utils')


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
        const token = JWT.generate({
            id:data._id,
            username:data.username
        },'1d')
        req.header("Authorization",token)
        res.json({
            code: '0000',
            msg: '登陆成功',
            data: token
        })
    }).catch(err => {
        res.json({
            code: '2001',
            msg: '数据库读取失败'+err,
            data: null
        })
    })
})

router.post('/loginout', (req, res) => {
    
})
module.exports = router