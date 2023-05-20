const { DataTypes,Model } = require('sequelize')
const sequelize = require('../sequelize')

class UsersModel extends Model{}

UsersModel.init({
    id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncreament: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '没有名字'
    },
    age:{
        type: DataTypes.INTEGER(3),
        allowNull: false,
        defaultValue: 0
    },
    birthdate:{
        type: DataTypes.DATEONLY, 
        allowNull: true, 
        defaultValue: DataTypes.NOW()
    }
}, {
    sequelize:sequelize,
    moduleName:'UsersModel',
    timestamps: false,
    tableName: 'users'
})
module.exports = UsersModel
