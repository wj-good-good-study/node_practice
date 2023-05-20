const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const BooksModel = sequelize.define('feiluBooks', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '无'
    },
    writer: {
        type: DataTypes.STRING(50),
        defaultValue: '无',
    },
    tag: {
        type: DataTypes.STRING(50),
        defaultValue: '无',
    },
    describe: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'feiluBooks'
})
const DirectoryModel = sequelize.define('feiludirectory', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '无'
    },
    writer: {
        type: DataTypes.STRING(50),
        defaultValue: '无',
    },
    directory: {
        type: DataTypes.TEXT, 
        defaultValue: '无'
    }
}, {
    timestamps: false,
    tableName: 'feiludirectory'
})
sequelize.sync()
module.exports = { BooksModel, DirectoryModel }
