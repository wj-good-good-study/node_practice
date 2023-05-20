const jwt = require('jsonwebtoken')
const config = require('../config/config')
let checkTokenMiddleware = (req, res, next) => {
    let token = req.get('token')
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        })
    }
    jwt.verify(token, config.SECRET, (err, data) => {
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token 校验失败',
                data: null
            })
        }
        req.user = data
        next()
    })
}
module.exports = checkTokenMiddleware