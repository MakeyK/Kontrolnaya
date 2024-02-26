const Router = require('express')
const router = new Router()
const DBController = require('../Controllers/DBController')
const db = require('../db')

router.post('/create', DBController.create)
router.post('/create1', DBController.create1)
router.delete('/delauto/:id', DBController.DelIdAuto)
router.delete('/deluser/:id_user', DBController.DelIdUser)

module.exports = router