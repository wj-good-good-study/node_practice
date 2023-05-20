const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
    // 处理中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(`服务器被访问了，地址是：${req.url}，方法是：${req.method}`)
})

server.listen(3000,function(){
    console.log('监听3000端口中')
})