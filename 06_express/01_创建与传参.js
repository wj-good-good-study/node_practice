const express = require('express')

const app = express()

app.all('/user',(req,res)=>{
    res.send('Hello World1')
})

app.get('/user/:id/:name',(req,res)=>{
    res.send(req.params)
})
app.post('/user',(req,res)=>{
    res.send({title: 'Hello World',time: new Date()})
})

app.get('/',(req,res)=>{
    res.send(req.query)
})
app.listen(81, () => {
    console.log("express 启动")
})