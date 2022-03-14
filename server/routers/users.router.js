const Router = require('express')
const usersController = require('../controllers/usersController')

const router = new Router()

router.get('/', usersController.getUsers)

module.exports = router