const fs = require( 'fs')
const crypto = require('crypto')
// 需要密钥，用随机数增强的hash算法
const content = fs.readFileSync('./crypto加密/index.txt','utf-8')
const key = 'wangjie'
const hash = crypto.createHmac('md5',key)
const word = hash.update(content).digest('hex')
console.log(word)