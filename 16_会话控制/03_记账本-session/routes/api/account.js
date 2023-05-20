var express = require('express');
const moment = require('moment');
const AccountModel = require('../../models/AccountModles')
var router = express.Router();

router.get('/account', (req, res) => {
    AccountModel.find().sort({ time: -1 }).then(data => {
        res.json({
            code: '0000',
            msg: '读取成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '1001',
            msg: '读取失败',
            data: null
        })
    });
});

router.get('/account/:id', (req, res) => {
    AccountModel.findById({ _id: req.params.id }).then(data => {
        res.json({
            code: '0000',
            msg: '读取成功',
            data: data
        })
    }).catch(err => {
        res.json({ code: '1004', msg: '读取失败' });
    })
});

router.patch('/account/:id', (req, res) => {
    AccountModel.updateOne({ _id: req.params.id }, req.body).then(data => {
        AccountModel.findById({ _id: req.params.id }).then(data => {
            res.json({
                code: '0000',
                msg: '修改成功',
                data: data
            })
        }).catch(err => {
            res.json({ code: '1005', msg: '修改失败' });
        })
    }).catch(err => {
        res.json({ code: '1005', msg: '修改失败' });
    })
});

router.post('/account', (req, res) => {
    // 插入数据库
    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    }).then(data =>
        res.json({
            code: '0000',
            msg: '添加成功',
            data: data
        })
    ).catch(err =>
        res.json({
            code: '1002',
            msg: '读取失败',
            data: null
        })
    );
});

router.delete('/account/:id', (req, res) => {
    const id = req.params.id;
    AccountModel.deleteOne({ _id: id }).then(data => {
        res.json({
            code: '0000',
            msg: '删除成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '1003',
            msg: '删除失败',
            data: null
        })
    });

});
module.exports = router;

