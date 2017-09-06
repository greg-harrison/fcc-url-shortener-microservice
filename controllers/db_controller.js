const urlStorageModel = require('../models/url_model')

module.exports = {
  urlStorage_list: (req, res) => {
    res.send('NOT IMPLEMENTED: Get all data')
    console.log('res', res);
  },
  urlStorage_post: (req, res) => {
    const urlDoc = {
      userUrl: req.userUrl,
      shortenedUrl: req.shortUrl
    }

    var newUrlStorage = new urlStorageModel(urlDoc)
    newUrlStorage.save()

    res.send('Saved')
  },
  urlStorage_get: (req, res) => {
    res.send('NOT IMPLEMENTED: GET specific record')
  }
}
