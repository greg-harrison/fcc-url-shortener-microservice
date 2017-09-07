const express = require('express')
const router = express.Router()
const urlController = ('../controllers/url_controller')

router.get('/:outputUrl?', urlController.navigateToUrl)
router.get('/create/:inputUrl', urlController.createUrl)

module.exports = router
