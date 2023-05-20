const path = require('path')
const fs = require('fs')

const styleReg = /<style>[\s\S]*<\/style>/im
const scriptReg = /<script>[\s\S]*<\/script>/im

fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('文件读取错误' + err)
    let style = resolveCSS(dataStr, './style.css')
    let js = resolveJs(dataStr, './script.js')
    let html = resolveHTML(dataStr,'./style.css','./script.js')
})

function resolveCSS(data, address) {
    let style = styleReg.exec(data)[0]
    style = style.replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, address), style, 'utf8', err => console.log(err))
}
function resolveJs(data, address) {
    let js = scriptReg.exec(data)[0]
    js = js.replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, address), js, 'utf8', err => console.log(err))
}
function resolveHTML(data,cssAddress,jsAddress){
    data = data.replace(styleReg,`<link rel="stylesheet" href="${cssAddress}" />`).replace(scriptReg,`<script src="${jsAddress}"></script>`)
    fs.writeFile(path.join(__dirname, '/index_ok.html'), data, 'utf8', err => console.log(err))
}