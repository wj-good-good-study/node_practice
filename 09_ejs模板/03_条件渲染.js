const ejs = require('ejs')
const fs = require('fs')

const str = fs.readFileSync('09_ejs模板/03_条件渲染.html').toString()
const result = ejs.render(str, { isLogin: false })
console.log(result)