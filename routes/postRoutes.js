const express = require('express')
const router = express.Router()
const postController = require('../controller/postControllers')

router.get('/', postController.getAll)

module.exports = router