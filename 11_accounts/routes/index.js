var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取 db 对象
const db = low(adapter);
//导入 shortid
const shortid = require('shortid');

router.get('/account', (req, res) => {
  let accounts = db.get('accounts').value();
  res.render('list', { accounts: accounts })
});

router.get('/account/create', (req, res) => {
  res.render('create');
});

router.post('/account', (req, res) => {
  let id = shortid.generate();
  db.get('accounts').unshift({ id: id, ...req.body }).write();
  res.render('success', { msg: '添加成功', url: '/account' })
});

router.get('/account/:id', (req, res) => {
  const id = req.params.id;
  db.get('accounts').remove({id:id}).write();
  res.render('success', { msg: '删除成功', url: '/account' })
});
module.exports = router;
