const {Frond} = require('@frondjs/frond')
const {objectkit, functionkit} = require('basekits')
const metapatcher = require('metapatcher')

module.exports = function createDocumentMetadata() {
  const {env, assets, name, url} = Frond.getWindow().Monodrom.config

  // essential
  metapatcher.setFavicon(assets['brand/icon-32x32.png'])
  metapatcher.setProjectMeta({
    name: name,
    url: url,
    logo: assets['img/logo-sq.jpg'],
    primaryColor: '#434345',
    backgroundColor: '#f5f5f5'
  })

  const icons = [
    assets['brand/icon-16x16.png'],
    assets['brand/icon-32x32.png'],
    assets['brand/icon-150x150.png'],
    assets['brand/icon-180x180.png'],
    assets['brand/icon-192x192.png'],
    assets['brand/icon-512x512.png']
  ]
  metapatcher.setIcons(icons)
  metapatcher.setSafariPinnedTab(assets['brand/safari-pinned-tab.svg'], '#434345')

  metapatcher.set('meta', undefined, {name: 'google', content: 'notranslate'})

  if (env == 'production') {
    metapatcher.robots('index')
    metapatcher.set('meta', 'name', {name: 'manifest', content: '/site.webmanifest'})
    metapatcher.set('meta', 'name', {name: 'msapplication-config', content: '/msconfig.xml'})
  }
  else {
    metapatcher.robots('noindex')
  }

  metapatcher.prioritize('https://cdn.gozel.com.tr', 'preconnect')
  metapatcher.prioritize('https://google-analytics.com', 'preconnect')
}
