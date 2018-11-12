const express = require('express')
const router = express.Router()
const postController = require('../controller/postControllers')

router.get('/', postController.getAll)
router.post('/', postController.newPost)
router.delete('/:id', postController.deletePost)

module.exports = router