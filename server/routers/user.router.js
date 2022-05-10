const Router = require('express')
const userController = require('../controllers/userController')

const router = new Router()

router.get('/:id', userController.getUser)

router.put('/addfriend', userController.addFriend)

router.get('/friends/:id', userController.getFriends)

module.exports = router