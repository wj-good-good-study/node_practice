const mongoose = require('mongoose')
let AccountSchema = mongoose.Schema({
    title: { type: String, require: true },
    time: Date,
    type: { type: Number, default: -1 },
    account: { type: Number, require: true },
    remarks: String
});
// 创建模型对象
let AccountModel = mongoose.model('accounts', AccountSchema);

module.exports = AccountModel;