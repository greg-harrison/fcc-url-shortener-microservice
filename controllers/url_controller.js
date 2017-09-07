const Urls = require('../models/url_model')
const mainController = require('./main_controller')

module.exports = {

  createUrl: (req, res) => {
    const urlDoc = {
      userUrl: req.userUrl,
      shortenedUrl: req.shortUrl
    }

    if (!!req.params.inputUrl) {
      let urlValid

      mainController.validateUrl({ 'inputUrl': req.params.inputUrl })

      if (urlValid) {
        var newUrl = new Urls(urlDoc)
        newUrl.save()
        res.send('Saved')
      } else {
        payload.error = 'Invalid Url'
        res.send(compiledTemplate({ payload }))
      }

    } else {
      res.send(compiledTemplate({ payload }))
    }
  },

  navigateToUrl: (req, res) => {
    console.log('req.params.outputUrl', req.params.outputUrl);
    console.log(JSON.stringify(res, null, 2))
    res.send('NOT IMPLEMENTED: GET specific record')
  }
}

app.get('/create/:inputUrl', (req, res) => {
  console.log('req.params', req.params);

  let payload = {}
  let userUrl = 'http://test.com'
  let shortUrl = 't.co'

})
