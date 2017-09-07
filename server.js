const express = require('express')
const middleware = require('./middleware')
const mongoDB = 'mongodb://127.0.0.1/fcc_url_shortener'
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect(mongoDB)

const app = express()

app.use(middleware.malformedUrl)

app.use('/', routes)

app.listen(8000, () => {
  console.log('The server is running on port 8000');
})
