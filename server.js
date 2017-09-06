const express = require('express')
const pug = require('pug')
const middleware = require('./middleware')
const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/fcc_url_shortener'
// Need to add a Controllers file for the validations and for the Mongoose setup

// Valid url pairs should be stored like this
// {
//   id: int,
//   userUrl: String,
//   shortenedUrl: String
// }

mongoose.connect(mongoDB)

const compiledTemplate = pug.compileFile('templates/template.pug')
const app = express()
const db_promise = mongoose.connect(mongoDB, {
  useMongoClient: true,
  /* other options */
});

const urlSchema = mongoose.Schema({
  userUrl: String,
  shortenedUrl: String
})

const UrlStorage = mongoose.model('UrlStorage', urlSchema)

var urlDocument = new UrlStorage({})

db_promise.then((db) => {
  console.log('hello')
})

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

  // Validate inputUrl

  // Shortened
  // First and Last letters from domain name
  // last 2 numbers from New Date()

  let userUrl = 'http://test.com'
  let shortUrl = 't.co'

  urlDocument.save((err, urlDocument) => {
    urlDocument.userUrl = userUrl
    urlDocument.shortenedUrl = shortUrl
  })

})

app.listen(8000, () => {
  console.log('The server is running on port 8000');
})
