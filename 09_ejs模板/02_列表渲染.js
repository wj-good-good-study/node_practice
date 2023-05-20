const ejs = require('ejs')
const fs = 	require('fs')

const arr = ['A','B','C','D','E']

const str = fs.readFileSync('09_ejs模板/02_列表渲染.html').toString()

const result = ejs.render(str,{arr})

console.log(result)