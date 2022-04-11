const Router = require('express')
const postsController = require('../controllers/postsController')

const router = new Router()

router.post('/', postsController.createPost)

router.get('/', postsController.getOwnPosts)

router.get('/posts', postsController.getPosts)

module.exports = router