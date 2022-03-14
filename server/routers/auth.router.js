const Router = require('express')
const authController = require('../controllers/authController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')

const router = new Router()

router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 6 и меньше 12 символоа').isLength({min: 6, max: 12})
], authController.registration)
router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.auth)

module.exports = router