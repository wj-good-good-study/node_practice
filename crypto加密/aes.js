const fs = require('fs')
const crypto = require('crypto')

let encrypt = (key,iv,data) => {
    // 创建一个密钥对象，包含两个属性 - key和iv - 分别是密钥和伪随机数种子。
    let dep = crypto.createCipheriv('aes-128-cbc',key,iv)
    // 将密文打包为字节数组。
    return dep.update(data,'binary','hex') + dep.final('hex')
}
let decrypt = (key,iv,crypted) => {
    // 将16进制的crypted转换成字节数组，然后再将其转换回字符串形式。
    let crypt = Buffer.from(crypted,'hex').toString('binary')
    // 创建一个aes加密对象，参数是当时加密的密钥和初始向量。可以参考MD5
    let dep = crypto.createDecipheriv("aes-128-cbc",key,iv)
    // 输出加密后的字节数组。
    return dep.update(crypt,'binary','utf8') + dep.final('utf8')
}
// 128 = 16 * 8
let key = '1234567890qweasd'
let iv = 'qwertyuiop123456'
let data = fs.readFileSync('./crypto加密/index.txt','utf-8')

let enc = encrypt(key,iv,data)
console.log('加密：',enc)
let dec = decrypt(key,iv,enc)
console.log('解密：',dec)