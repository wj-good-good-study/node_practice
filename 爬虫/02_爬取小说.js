const https = require('https')
const express = require('express')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const app = express()

app.get('/detail', (req, res) => {
    httpsget(res)
})

let httpsget = async (response) => {
    https.get('https://b.faloo.com/y_0_1.html', (res) => {
        let html = ''
        res.on("data", (chunk) => {
            chunk = iconv.decode(chunk, 'gb2312')
            chunk = iconv.encode(chunk, 'utf-8')
            html += chunk
        })
        res.on("end", () => {
            const list = $html(html)
            response.send(list)
        })
    })
}

let $html = (html) => {
    const $ = cheerio.load(html)
    const $list = $('.TwoBox02_01')
    const list = []
    $list.each((index, value) => {
        let obj = {}
        const $TwoBox02_02 = $(value).find('.TwoBox02_02')
        $TwoBox02_02.each((i, v) => {
            const $img = $(v).find('.TwoBox02_03').find('img').attr('src')
            obj.img = $img
        })
        const $title = $(value).find('.TwoBox02_08').find('a').text()
        const $writer = $(value).find('.TwoBox02_09').find('a').attr('title')
        const $tag = $(value).find('.fontSize14andHui').find('a').attr('title')
        const $describe = $(value).find('.TwoBox02_06').text()
        obj.title = $title
        obj.writer = $writer
        obj.tag = $tag
        obj.describe = $describe
        console.log(obj)
        list.push(obj)
    })
    return list
}

app.listen(3000)