const Urls = require('../models/url')
const mainController = require('./main')
const pug = require('pug')
const compiledTemplate = pug.compileFile('templates/success.pug')

module.exports = {
  createUrl: (req, res) => {
    console.log('req', req);

    const urlDoc = {
      userUrl: req.userUrl,
      shortenedUrl: req.shortUrl
    }

    console.log('urlDoc', urlDoc);
    let payload = urlDoc

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
