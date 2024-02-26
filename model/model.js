const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Auto = sequelize.define('auto',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    brend: {type: DataTypes.STRING},
    year: {type: DataTypes.DATE},
    number: {type: DataTypes.STRING}
})

const User = sequelize.define('users', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique:true, allowNull: true},
    password: {type: DataTypes.STRING, allowNull: true},
    role: {type: DataTypes.STRING, defaultValue: "user"}
})

User.hasMany(Auto)
Auto.belongsTo(User)

module.exports = {
    User,
    Auto
}