const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain'
    });
    res.setHeader('Content-Type', 'text/html');
    const fpath = path.join(__dirname,'../03_拆分保存html', req.url)
    fs.readFile(fpath,'utf8',(err,data)=>{
        if(err) return res.end('404 NOT FOUND')
        return res.end(data)
    })
})

server.listen(3000, () => { console.log('server is running on 127.0.0.1:3000') })