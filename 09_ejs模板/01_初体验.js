const ejs = require('ejs')
const fs = require('fs')


const name = 'tom'
const str = fs.readFileSync('09_ejs模板/01_html.html').toString()
const result = ejs.render(str, { name: name,age:12 })
console.log(result)