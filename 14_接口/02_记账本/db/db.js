/**
 * 
 * @param {*} success 成功连接回调 
 * @param {*} error 失败连接回调
 */
module.exports = (success, error) => {
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败')
        }
    }

    const mongoose = require('mongoose')
    const {DBHOST,DBPORT,DBNAME} = require('../config/config')

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        success();
    });
    mongoose.connection.on('err', () => {
        error();
    })
    mongoose.connection.on('close', () => {
        console.log('断开连接')
    })
}