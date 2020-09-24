console.log('monodrom. javascript web application development and distribution framework.')
const {Frond, Router, NetworkClient, Component} = require('@frondjs/frond')
const dependencies = require('./dependencies')
const registerComponents = require('./components')
const registerNetworkClients = require('./network-clients')
const createRouter = require('./router')
const createDocumentMetadata = require('./createDocumentMetadata')
const detectAppLocale = require('./detectAppLocale')

const {env, locales, locale} = Frond.getWindow().Monodrom.config
const appLocale = detectAppLocale()

Frond
  .configure({locale: appLocale, locales: locales.split(','), env: env})
  .on('error', function(err, ctx) {
    console.error(err, ctx)
  })
  .on('warning', function(msg, ctx) {
    if (!Frond.isProd()) console.warn(msg, ctx)
  })
  /*
    load translations when ready:
    .loadTranslation('en_US', require('../translations/en_US.json'))
  */
  .loadDependencies(dependencies)
  .then(function() {
    registerNetworkClients()
    createRouter()
    registerComponents()

    Frond.render('app', Frond.getDocument().getElementById('app-wrapper'))

    createDocumentMetadata()

    // remove no js warning
    const nojs = document.getElementById('no-js-msg')
    if (nojs) nojs.parentNode.removeChild(nojs)
  })
