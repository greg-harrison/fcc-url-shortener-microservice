const express = require('express')
const middleware = require('./middleware')
const mongoDB = 'mongodb://127.0.0.1/fcc_url_shortener'
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8000

mongoose.connect(mongoDB, {
  useMongoClient: true
})

app.use(middleware.malformedUrl)

app.use('/', routes)

app.listen(port, () => {
  console.log('The server is running on port:', port);
})
