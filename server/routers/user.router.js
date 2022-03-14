const Router = require('express')
const userController = require('../controllers/userController')

const router = new Router()

router.get('/:id', userController.getUser)

module.exports = router