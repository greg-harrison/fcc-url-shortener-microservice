const express = require('express')
const pug = require('pug')
const middleware = require('./middleware')

const compiledTemplate = pug.compileFile('templates/template.pug')
const app = express()

app.use(middleware.malformedUrl)

app.get('/', (req, res) => {
  res.send(compiledTemplate())
})

app.listen(8000)
