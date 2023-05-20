// 安装 mongoose
// 导入 mongoose
const mongoose = require('mongoose');
// 链接 mogodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/stu');
// 设置回调
// 连接成功回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
});
mongoose.connection.on('error', () => {
    console.log('连接失败');
});
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});
// 关闭连接
// setTimeout(()=>{
//     mongoose.disconnect();
// },3000)

