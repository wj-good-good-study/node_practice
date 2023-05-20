const MoviesModel = require('../model/MoviesModel')
const { Op } = require('sequelize');
const sequelize = require('../sequelize')
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
        // droptable()
        addmovies($title,$other,$rating_num,$img).then(data=>console.log(data))
    })
    return list
}

const droptable = async()=>{await douban.drop()}

const addmovies = async(title,other,rating_num,img) =>{
    const movies = await MoviesModel.create({
        title:title,
        other:other,
        rating_num:rating_num,
        img:img
    })
    return movies.toJSON()
}

app.listen(3000)



