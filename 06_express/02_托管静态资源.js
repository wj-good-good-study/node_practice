const express = require('express')
const app = express()

// 托管静态资源，多个托管可以调用多次express.static()，相同文件以托管顺序优先显示
app.use('/public',express.static('../03_拆分保存html'))
app.use('/public',express.static('../01_文件读取'))

app.listen(81,()=>{
    console.log('启动成功')
})