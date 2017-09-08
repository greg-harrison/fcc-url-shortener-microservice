const Urls = require('../models/url')
const mainController = require('./main')
const pug = require('pug')
const compiledTemplate = pug.compileFile('templates/success.pug')

module.exports = {
  createUrl: (req, res) => {
    console.log('', req.params[0])
    let payload = {
      error: ''
    }

    // Run a FINDONE so that we can make sure it's not already in the db


    if (!!req.params[0]) {
      let url = req.params[0]

      let urlValid = mainController.validateUrl(url)

      let urlExists = false

      Urls.findOne({ userUrl: url }, (err, result) => {
        console.log('res', result);
        if (result) {
          console.log('testing');
          urlExists = true
          payload.userUrl = url
          payload.shortenedUrl = result[0].shortenedUrl
        }

        return
      })

      if (urlValid) {

        if (urlExists) {

          res.send(compiledTemplate({ payload }))

        } else {
          payload.userUrl = url
          payload.shortenedUrl = mainController.generateShortUrl(url)

          let newUrl = new Urls(payload)
          newUrl.save()

          res.send(compiledTemplate({ payload }))
        }
      } else {
        payload.error = 'Invalid Url'
        res.send(compiledTemplate({ payload }))
      }

    } else {
      res.send(compiledTemplate({ payload }))
    }
  },

  navigateToUrl: (req, res) => {
    Urls.findOne(
      { shortenedUrl: req.params.outputUrl },
      (err, result) => {
        return res.redirect(result.userUrl)
      }
    )
  }
}
