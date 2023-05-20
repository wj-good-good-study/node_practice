const path = require('path')
// 使用join可以处理路径中的./，字符串拼接则会报错
const pathStr = path.join(__dirname, '/a/b', '../', './index.html')
console.log(pathStr)
// basename可以获取文件名
const fpath = '/a/b/c/d/index.js'
const fullName = path.basename(fpath)
console.log(fullName)
// 第二个参数可以将后缀名去除
const realName = path.basename(fpath,'.js')
console.log(realName)
// 获取文件后缀名
console.log(path.extname(fpath))
console.log(path.resolve('/User/Desktop','/abc.txt'))
console.log(__dirname,__filename,process.cwd())