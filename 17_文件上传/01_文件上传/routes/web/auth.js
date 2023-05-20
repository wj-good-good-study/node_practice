const express = require('express')
const router = express.Router()
const UserModel = require('../../models/UserModles')
const md5 =require('md5')

// 注册
router.get('/reg', (req, res) => {
    res.render('auth/reg')
})
router.post('/reg', (req, res) => {
    // 表单验证
    UserModel.create({...req.body, password: md5(req.body.password)}).then(data => {
        res.render('success', { msg: '注册成功', url: '/login' })
    }).catch(err => {
        res.status(500).send('注册失败:' + err)
    })

})
// 登录
router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', (req, res) => {
    let {username,password} = req.body
    UserModel.findOne({username,password:md5(password)}).then(data=>{
        if(!data){
            res.send('账号或者密码错误')
        }
        res.render('success',{msg:'登陆成功',url:'/account'})
    }).catch(err=>{
        res.status(500).send('登陆失败:' + err)
    })
})

router.post('/loginout',(req,res)=>{
    req.header('Authorization',null)
    res.render('success',{msg:'退出成功',url:'/login'})
})
module.exports = router