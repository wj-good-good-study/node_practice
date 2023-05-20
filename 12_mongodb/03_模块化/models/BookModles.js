const mongoose = require('mongoose')
let BookSchema = mongoose.Schema({
    name: { type: String, require: true }, // 名称 unique: true必须唯一 不可以重复 不可以为空
    author: { type: String, default: '匿名' }, // 作者 默认值
    price: { type: Number, require: true },
    _isHot: { type: Boolean, enum: [true, false] },
    tags: Array,
    data: { type: Date, require: true }
});

BookSchema.pre('find',(next)=>{
    console.log('pre被执行')
    next()
})
BookSchema.post('find',(data)=>{
    console.log('post被执行',data) 
})
// 创建模型对象
let BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;