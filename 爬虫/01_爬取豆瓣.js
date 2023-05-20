// 爬取豆瓣电影数据
const https = require('https')
const express = require('express')
const cheerio = require('cheerio') 

const app = express()

app.get('/detail', (req, res) => {
    httpsget(res)
})

let httpsget = async(request) => {
    await https.get('https://movie.douban.com/top250', (res) => {
        let html = ''
        res.on('data', (chunk) => {
            html += chunk
        })
        res.on('end', () => {
            const list = $html(html)
            request.send(list)
        })
    })
}
let $html = (html)=>{
    const $ = cheerio.load(html)
    const list = []
    const $list = $('li .item')
    $list.each((index,value)=>{
        let $title = $(value).find('a').find('.title').text()
        let $other = $(value).find('a').find('.other').text()
        let $rating_num = $(value).find('.rating_num').text()
        let $img = $(value).find('img').attr('src')
        list.push({title:$title,other:$other,rating_num:$rating_num,img:$img})
    })
    return list
}

app.listen(3000)