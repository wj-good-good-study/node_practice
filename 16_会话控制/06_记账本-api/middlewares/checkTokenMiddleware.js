const JWT = require('../utils/utils')
let checkTokenMiddleware = (req, res, next) => {
    if(req.url.includes('/login')){
        next()
        return
    }
    let token = req.headers["authorization"]
    
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        })
    }
    const payload = JWT.verify(token)
    console.log(payload)
    if(payload){
        const newToken = JWT.generate({
            id: payload.id,
            username: payload.username
        },'1d')
        res.header('Authorization',newToken)
        next()
    }else{
        res.json({
            code:2004,
            msg:'token过期，校验失败',
            data: null
        })
    }
}
module.exports = checkTokenMiddleware