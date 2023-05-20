var express = require('express');
const formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 显示网页 */
router.get('/portrait', (req, res) => {
  res.render('portrait');
});

/* 处理文件上传 */
router.post('/portrait', (req, res, next) => {
  const form = formidable({
    multiples: true,
    // 保存路径
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    let url = '/images/' + files.portrait.newFilename;
    res.send(url);
  });
});

module.exports = router;
