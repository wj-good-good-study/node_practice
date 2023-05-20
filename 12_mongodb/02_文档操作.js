// 安装 mongoose
// 导入 mongoose
const mongoose = require('mongoose');
// 链接 mogodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/stu');
// 设置回调
// 连接成功回调
mongoose.connection.once('open', () => {
    // 创建文档
    // 设置集合中文档的属性和类型
    let BookSchema = mongoose.Schema({
        name: { type: String, require: true }, // 名称 unique: true必须唯一 不可以重复 不可以为空
        author: { type: String, default: '匿名' }, // 作者 默认值
        price: { type: Number, require: true },
        _isHot: { type: Boolean, enum: [true, false] },
        tags: Array,
        data: { type: Date, require: true }
    });
    // 创建模型对象
    let BookModel = mongoose.model('books', BookSchema);
    // 生成一条
    // BookModel.create({
    //     name: '西游记2',
    //     author: '吴承恩',
    //     price: 72.75,
    //     _isHot: true,
    //     tags: ['社会', '恐怖', '晚上不要看'],
    //     data: new Date()
    // }).then(data => {
    //     console.log(data)
    // })
    // 删除一条
    // BookModel.deleteOne({_id:'645af39d2be7c66b918656f7'}).then(data=>{
    //     console.log(data);
    // });
    // 批量删除文档
    // BookModel.deleteMany({_isHot:true}).then(data=>{
    //     console.log(data);
    // });
    // 修改文档
    // BookModel.updateOne({name:'西游记1'},{price: 7.5}).then(data=>{console.log(data)});
    // BookModel.updateMany({_isHot: true},{price: 100}).then(data=>{console.log(data)});
    // 查找文档
    // BookModel.findOne({name: '狂飙'}).then(data => {console.log(data)});
    // BookModel.findById('645af6a79964b2ec38f406b3').then(data=>console.log(data));
    // BookModel.find({is_hot: true}).then(data=>console.log(data));
    // 条件查询
    // BookModel.find({ price: { $lt: 20 } }, { id: 0 }).then(data => { console.log(data) });

    // BookModel.find({ $or: [{ price: { $lt: 20 } }, { price: { $gt: 70 } }] }).then(data => { console.log(data) });
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] }).then(data => { console.log(data) });
    // BookModel.find({name:/^三/}).then(data=>console.log(data));
    // BookModel.find({name:new RegExp('三')}).then(data=>console.log(data));
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
    //     .select({ author: 1, price: 1, _id: 0 })
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
    //     .select({ author: 1, price: 1, _id: 0 })
    //     .sort({ price: 1 }) // 1 升序，2 降序
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));
    BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
        .select({ author: 1, price: 1, _id: 0 })
        .sort({ price: 1 }) // 1 升序，2 降序
        .skip(2)
        .limit(5)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));

    console.log('ok');
});
mongoose.connection.on('error', () => {
    console.log('连接失败');
});
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});

