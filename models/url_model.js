const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  userUrl: String,
  shortenedUrl: String
})

const urlStorageModel = mongoose.model('url', urlSchema)
module.exports = urlStorageModel
