const mongoose = require('mongoose')
let UserSchema = mongoose.Schema({
    username:{type: String,require: true},
    password:{type: String,require: true}
});
// 创建模型对象
let UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;