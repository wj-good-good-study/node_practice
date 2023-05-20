const Sequelize = require('sequelize')
const {database,host,user,password} = require('../config/db')
// 连接数据库
const sequelize = new Sequelize(database,user,password,{
    host: host,
    port: 3306,
    dialect: 'mysql',
    logging: null,
    pool: {
        max: 20,
        min: 1,
        acquire: 60000,
        idle: 10000
    },
})

module.exports = sequelize
// 测试连接
// sequelize.authenticate().then(_=>{
//     console.log('连接成功')
// }).catch(err=>{
//     console.log('连接失败'+err)
// })
// sequelize.close()