const fs = require('fs')
const crypto = require('crypto')
// md5 加密
const content = fs.readFileSync('./crypto加密/index.txt','utf-8')
const md5 = crypto.createHash('md5')
hex1 = md5.update(content).digest('hex')
const sha1 = crypto.createHash('sha1')
hex2 = sha1.update(content).digest('hex')

console.log(hex1,'----',hex2)