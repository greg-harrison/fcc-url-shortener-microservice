const express = require('express')
const pug = require('pug')
const middleware = require('./middleware')
const mongoDB = 'mongodb://127.0.0.1/fcc_url_shortener'
const mongoose = require('mongoose')
const urlStorageModel = require('./models/url_model.js')
const urlController = require('./controllers/db_controller')
const mainController = require('./controllers/main_controller')

// Need to add a Controllers file for the validations and for the Mongoose setup

mongoose.connect(mongoDB)

const compiledTemplate = pug.compileFile('templates/template.pug')
const app = express()

const db_promise = mongoose.connect(mongoDB, {
  useMongoClient: true,
});


db_promise.then((db) => {
  console.log('hello')
})

app.use(middleware.malformedUrl)

app.get('/:outputUrl?', (req, res) => {
  let payload = {}
  payload = urlController.urlStorage_list
  console.log(JSON.stringify(payload, null, 2))

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

  // TODO: Solve issues where we get Undefined when we pass an actual URL
  // TODO: Get Mongo running on other machine
  // !!(since it's from Brew, $brew services start mongodb)

  // Validate inputUrl

  // Shortened
  // First and Last letters from domain name
  // last 2 numbers from New Date()

  let userUrl = 'http://test.com'
  let shortUrl = 't.co'

  console.log('req.paramas.inputUrl', req.params.inputUrl);

  if (req.params.inputUrl) {
    // Check to see if the url is valid
    let urlValid

    mainController.validateUrl({ 'inputUrl': req.params.inputUrl })

    if (urlValid) {
      urlController.urlStorage_post({
        userUrl,
        shortUrl
      })
    } else {
      payload.error = 'Invalid Url'
      res.send(compiledTemplate({ payload }))
    }
  } else {
    res.send(compiledTemplate({ payload }))
  }

})

app.listen(8000, () => {
  console.log('The server is running on port 8000');
})
