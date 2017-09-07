const express = require('express')
const router = express.Router()
const pug = require('pug')
const urlRoutes = require('./urls')
const compiledTemplate = pug.compileFile('templates/template.pug')

//Base for URL/Create and URL/GOTO
router.use('/url', urlRoutes)

router.get('/', (req, res) => {
  // compiledTemplate()
  res.send('Hello')
})

module.exports = router
