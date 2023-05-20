const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const MoviesModel = sequelize.define('douban', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '无'
    },
    other: {
        type: DataTypes.STRING(50),
        defaultValue: '无',
    },
    rating_num: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: false,
        defaultValue: 0.0
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'douban'
})
sequelize.sync()
module.exports = MoviesModel
