const {BooksModel,DirectoryModel} = require('../model/BooksModel')
const https = require('https')
const express = require('express')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

const app = express()

app.get('/books', (req, res) => {
    httpsget((data) => {
        console.log(data)
        res.send('ok')
    })
})

let httpsget = async (cb) => {
    await https.get('https://b.faloo.com/y_0_1.html', (res) => {
        let html = ''
        res.on("data", (chunk) => {
            chunk = iconv.decode(chunk, 'gb2312')
            chunk = iconv.encode(chunk, 'utf-8')
            html += chunk
        })
        res.on("end", () => {
            const list = $html(html)
            cb(list)
        })
    })
}

let $html = (html) => {
    const $ = cheerio.load(html)
    const $list = $('.TwoBox02_02')
    const list = []
    $list.each(async (index, value) => {
        let obj = {}
        const $TwoBox02_02 = $(value).find('.TwoBox02_02')
        $TwoBox02_02.each((i, v) => {
            const $img = $(v).find('.TwoBox02_03').find('img').attr('src')
            obj.img = $img
        })
        const $title = $(value).find('.TwoBox02_08').find('a').text()
        const $directoryUrl = $(value).find('.TwoBox02_08').find('a').attr('href')
        await https.get(`https:${$directoryUrl}`, res => {
            let html = ''
            res.on("data", (chunk) => {
                chunk = iconv.decode(chunk, 'gb2312')
                chunk = iconv.encode(chunk, 'utf-8')
                html += chunk
            })
            res.on("end", async() => {
                const titlelist = []
                const $ = cheerio.load(html)
                const $list = $('.DivTr .DivTd a')
                $list.each((index, value) => {
                    let title = $(value).attr('title')
                    title = title.replace($title,'').replace('\r\n','').replace(':','').trim()
                    titlelist.push({ title: title })
                })
                obj.title = $title
                const $writer = $(value).find('.TwoBox02_09').find('a').attr('title')
                const $tag = $(value).find('.fontSize14andHui').find('a').attr('title')
                const $describe = $(value).find('.TwoBox02_06').text()
                obj.writer = $writer
                obj.tag = $tag
                obj.describe = $describe
                await addbook($title,$writer,$tag,$describe,obj.img,titlelist)
                list.push(obj)
            })
        })
        

    })
    return list
}
// // 获取目录未实现
// let directory = async (url, cb) => {
// await directory('https://b.faloo.com/1303892.html',(data)=>{

        // })
// }

let addbook = async (title, writer, tag, describe, img,directory) => {
    for(dir of directory){
        const directories = await DirectoryModel.create({
            title: title,
            writer: writer,
            directory:dir.title
        })
    }
    const books = await BooksModel.create({
        title: title,
        writer: writer,
        tag: tag,
        describe: describe,
        img: img
    })
    
    // return book.toJSON()
}

app.listen(3000)



