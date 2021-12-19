const Router = require('express')
const usersController = require('../controllers/usersController')

const router = new Router()

router.get('/users', usersController.getUsers)

module.exports = router