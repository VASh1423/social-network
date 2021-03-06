const Router = require('express')
const postsController = require('../controllers/postsController')

const router = new Router()

router.post('/', postsController.createPost)

router.get('/:id', postsController.getOwnPosts)

router.put('/like', postsController.changePost)

router.get('/posts/:id', postsController.getPosts)

module.exports = router