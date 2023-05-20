const http = require('http')
const zlib = require('zlib')
const fs = require('fs') 	
const gzip = zlib.createGzip()

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./zlib压缩/index.txt')
    res.writeHead(200,{'Content-Type':'application/x-javascript;charset=utf-8','Content-Encoding':'gzip'})
    readStream.pipe(gzip).pipe(res)
}).listen(3000)
