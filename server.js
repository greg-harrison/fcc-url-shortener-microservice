const express = require('express')
const pug = require('pug')
const middleware = require('./middleware')
// Need to add a Controllers file for the validations and for the Mongoose setup
//require mongoose

const compiledTemplate = pug.compileFile('templates/template.pug')
const app = express()

app.use(middleware.malformedUrl)

app.get('/:outputUrl?', (req, res) => {
  let payload = {}

  if (req.params.outputUrl) {
    // Check to see if the url is valid

    let urlValid

    if (urlValid) {

    } else {
      payload.error = 'Invalid Url'
      res.send(compiledTemplate({ payload }))
    }
  } else {
    res.send(compiledTemplate({ payload }))
  }
})
app.get('/create/:inputUrl', (req, res) => {
  console.log('req', req);
})

app.listen(8000, () => {
  console.log('The server is running on port 8000');
})
