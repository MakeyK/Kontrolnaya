const {User, Auto} = require('../model/model')
const {Sequelize} = require('../db')
const ApiError = require('../ApiError')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')

class DBController
{
    async create1(req,res, next)
    {
        const data = req.body
        const candidatebrend = await Auto.findOne({where: {brend: data.brend}})
        if(candidatebrend)
        {
            return next(ApiError.badRequest("Бренд такой уже есть"))
        }
        
    }
    // Создание
    async create(req,res)
    {
        const {id, brend, year, number} = req.body
        const type = await Auto.create({id, brend, year, number})
        return res.json(type)
    }
    // Удаление по выбранному ID Auto
    async DelIdAuto(req,res)
    {
        const {id} = req.params
        let delid = await Auto.destroy({where:{id}})
        return res.json(delid)
    }
    // Удаление по выбранному ID User
    async DelIdUser(req,res)
    {
        const {id_user} = req.params
        let del = await User.destroy({where:{id_user}})
        return res.json(del)
    }
    async DelIdAuto(req,res)
    {
        const {id} = req.params
        let delid = await Auto.destroy({where:{id}})
        return res.json(delid)
    }
}

module.exports = new DBController()