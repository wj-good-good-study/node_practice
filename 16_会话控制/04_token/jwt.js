const jwt = require('jsonwebtoken')

let token = jwt.sign({
    username:'zhangsan'
},'salt',{
    expiresIn: 100 // 单位是秒
})
console.log(token)

jwt.verify(token,'salt',(err,data)=>{
    if(err) return console.log('校验失败',err)
    console.log('校验成功',data)
})