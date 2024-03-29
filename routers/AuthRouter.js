const Router = require('express')
const router = new Router()
const authController = require('../Controllers/AuthController')
const authMiddleware = require('../authMiddleware')


router.post('/registration', authController.registration)
router.post('/login', authController.login)

module.exports = router