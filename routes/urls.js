const express = require('express')
const router = express.Router()
const urlController = require('../controllers/url')

router.get('/:outputUrl', urlController.navigateToUrl)
router.get('/create/:inputUrl', urlController.createUrl)

module.exports = router
