// 入口文件
const dateFormat = require('./src/dateFormat')
const htmlEscape = require('./src/htmlEscape')


module.exports = {
    ...dateFormat,
    ...htmlEscape
}