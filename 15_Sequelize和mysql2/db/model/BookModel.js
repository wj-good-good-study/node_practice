const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const BooksModel = sequelize.define('mybooks', {
    id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncreament: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '没有书名'
    },
    author: {
        type: DataTypes.STRING(50),
        defaultValue: '匿名',
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    type: {
        type: DataTypes.ENUM('A', 'B', 'C', 'D', 'N'),
        allowNull: false,
        defaultValue: 'N'
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true,
        // type: DataTypes.VIRTUAL,
        // get() {
        //     return this.id.toString() + '' + this.name + '€'
        // }
    }
}, {
    timestamps: false,
    tableName: 'mybooks'
})
module.exports = BooksModel
