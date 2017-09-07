const express = require('express')
const router = express.Router()
const pug = require('pug')
const compiledTemplate = pug.compileFile('templates/template.pug')

//Base for URL/Create and URL/GOTO
router.use('/url', require('./urls'))

router.get('/', (req, res) => {
  res.send(compiledTemplate())
})

module.exports = router
