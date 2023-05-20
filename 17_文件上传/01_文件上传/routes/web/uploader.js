const express = require('express')
const router = express.Router()
const multer = require('multer')
const UserModel = require('../../models/UserModles')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})
const uplaoder = multer({ storage })
router.get('/upload', (req, res) => {
    res.render('uploader')
})
// router.post('/upload', uplaoder.single('avatar'), (req, res) => {
//     // console.log(req.files, req.body)
//     UserModel.findOne({ username: req.body.username }).then(data => {
//         UserModel.updateOne({ username: data.username }, { file: `/uploads/${req.file.filename}` }).then(data => {
//             res.send('ok')
//         })
//     }).catch(err => {
//         res.send(err)
//     })
//     res.send('ok')
// })
router.post('/upload', uplaoder.array('avatar', 12), (req, res) => {
    console.log(req.files, req.body)
    let files = req.files.map(file => {
        return `/uploads/${file.filename}`
    })
    UserModel.findOne({ username: req.body.username }).then(data => {
        UserModel.updateOne({ username: data.username }, { file: files.toString() }).then(data => {
            res.send('ok')
        })
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router