const db = require('./db/db')

const BookModel = require('./models/BookModles')

db(() => {
    // 生成一条
    // BookModel({
    //     name: '西游记7',
    //     author: '吴承恩',
    //     price: 72.75,
    //     _isHot: true,
    //     tags: ['社会', '恐怖', '晚上不要看'],
    //     data: new Date()
    // }).save().then(data => {
    //     console.log(data)
    // }).catch(err=>{
    //     console.log(err)
    // })
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
    // BookModel.insertMany(
    //     [{
    //         name: '西游记12',
    //         author: '吴承恩',
    //         price: 72.75,
    //         _isHot: true,
    //         tags: ['社会', '恐怖', '晚上不要看'],
    //         data: new Date()
    //     },
    //     {
    //         name: '西游记13',
    //         author: '吴承恩',
    //         price: 72.75,
    //         _isHot: true,
    //         tags: ['社会', '恐怖', '晚上不要看'],
    //         data: new Date()
    //     }]
    // ).then(data=>console.log('data',data))
    // 删除一条
    // BookModel.deleteOne({_id:'645af39d2be7c66b918656f7'}).then(data=>{
    //     console.log(data);
    // });
    // 批量删除文档
    // BookModel.deleteMany({_isHot:true}).then(data=>{
    //     console.log(data);
    // });
    // BookModel.findOneAndDelete({_isHot: true}).then(data=>{console.log(data)})
    // 修改文档
    // BookModel.updateOne({name:'西游记1'},{price: 7.5}).then(data=>{console.log(data)});
    // BookModel.updateMany({_isHot: true},{price: 100}).then(data=>{console.log(data)});
    // 查找文档
    // BookModel.findOne({name: '狂飙'}).then(data => {console.log(data)});
    // BookModel.findById('645af6a79964b2ec38f406b3').then(data=>console.log(data));
    // BookModel.find({is_hot: true}).then(data=>console.log(data));
    // BookModel.find({$where : "/^西游记/.test(this.name)"}).then(data=>console.log(data)).catch(err=>console.log(err))
    // 条件查询
    // BookModel.find({ price: { $lt: 20 } }, { id: 0 }).then(data => { console.log(data) });
    // BookModel.find({ $or: [{ price: { $lt: 20 } }, { price: { $gt: 70 } }] }).then(data => { console.log(data) });
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] }).then(data => { console.log(data) });
    BookModel.find({name:/^西/}).then(data=>console.log(data));
    // BookModel.find({name:new RegExp('西')}).then(data=>console.log(data));
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
    //     .select({ author: 1, price: 1, _id: 0 })
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
    //     .select({ author: 1, price: 1, _id: 0 })
    //     .sort({ price: 1 }) // 1 升序， -1 降序
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));
    // BookModel.find({ $and: [{ price: { $gt: 20 } }, { price: { $lt: 70 } }] })
    //     .select({ author: 1, price: 1, _id: 0 })
    //     .sort({ price: -1 }) // 1 升序，-1 降序
    //     .skip(2)
    //     .limit(5)
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));

    console.log('ok');
})