const fs = require('fs')
const path = require('path')

// fs.readFile(__dirname + '/grades.txt', 'utf8', (err, dataSrc) => {
//     if (err) return console.log('文件读取错误' + err)
//     const oldArr = dataSrc.split(',')
//     let newArr = []
//     oldArr.forEach(item => {
//         newArr.push(item.replace('=', '：'))
//     })
//     const newStr = newArr.join('\r\n')
//     fs.writeFile(__dirname + '/grades-ok.txt', newStr, { encoding: 'utf8', flag: 'a' }, function (err) { if (err) return console.log('文件写入错误' + err) })
// })
// let rs = fs.createReadStream(__dirname + '/grades.txt')

// rs.on('data', chunk => {
//     console.log(chunk, chunk.length)
// })
// rs.on('end', () => console.log('ok'))
// fs.mkdir('./page/son.txt',{recursive: true})
// console.log(fs.readdirSync('./page'))
// fs.rmdirSync('./page',{recursive: true})
// function readdirAll(dir){
//     let results = [path.resolve(__dirname,dir)]
//     const files = fs.readdirSync(dir,'utf8')
//     files.forEach(file => {
//         file = path.resolve(dir,file)
//         const stats = fs.statSync(file)
//         if(stats.isFile()){
//             results.push(file)
//         }else if(stats.isDirectory()){
//             results = results.concat(readdirAll(file))
//         }
//     });
//     return results
// }

// console.log(readdirAll('../'))