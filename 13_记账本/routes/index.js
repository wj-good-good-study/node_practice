var express = require('express');
const moment = require('moment');
const AccountModel = require('../models/AccountModles')
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取 db 对象
const db = low(adapter);
//导入 shortid
// const shortid = require('shortid');

router.get('/account', (req, res) => {
  AccountModel.find().sort({ time: -1 }).then(data => {
    res.render('list', { accounts: data, moment });
  }).catch(err => {
    res.status(500).send('获取数据失败：' + err)
  })
});

router.get('/account/create', (req, res) => {
  res.render('create');
});

router.post('/account', (req, res) => {
  // 插入数据库
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }).then(data =>
    res.render('success', { msg: '添加成功', url: '/account' })
  ).catch(err =>
    res.status(500).send('插入失败：' + err)
  );
});

router.get('/account/:id', (req, res) => {
  const id = req.params.id;
  AccountModel.deleteOne({ _id: id }).then(data => {
    res.render('success', { msg: '删除成功', url: '/account' })
  }).catch(err => {
    res.status(500).send('删除数据失败：' + err)
  });

});
module.exports = router;
