const {Frond} = require('@frondjs/frond')
const metapatcher = require('metapatcher')
const {objectkit, functionkit} = require('basekits')
const {LighthouseAnalytics, LAGoogleAnalytics} = require('lighthouse-analytics')

module.exports = function onAfterShift(route, prevRoute) {
  const {
    env, localizedURLs, locales, locale, url, name, googleAnalyticsPropertID
  } = Frond.getWindow().Monodrom.config
  const localVersions = locales
    .split(',')
    .filter(l => l != Frond.config('locale'))
    .reduce(function(memo, l) {
      memo[l] = url + Frond.getRouter().get(route.id, l).fullpath
      return memo
    }, {})

  metapatcher.setPageMeta({
    title: Frond._(route.metadata.title, 'routes'),
    description: Frond._(route.metadata.description, 'routes'),
    url: url + route.fullpath,
    image: '{{assets:img/social-media-cover.jpg}}',
    locale: Frond.config('locale'),
    localVersions: localVersions
  })

  metapatcher.breadcrumb(
    Frond
      .getRouter()
      .genBreadcrumb(route)
      .map(r => ({title: Frond._(r.metadata.title, 'routes'), url: r.fullpath})),
    {id: 'metapatcher-breadcrumb'}
  )

  const burgerMenuLink = Frond.getComponent('burgerMenuLink')
  burgerMenuLink.update({isActive: false})

  if (prevRoute === undefined) {
    const lighthouse = new LighthouseAnalytics()
    lighthouse.setContext({appName: name})
    lighthouse.on('error', function(name, debug, params) {
      console.log(name, debug, params)
    })
    if (googleAnalyticsPropertID.length > 0) {
      lighthouse.addService( new LAGoogleAnalytics({id: googleAnalyticsPropertID}) )
    }

    Frond.getWindow().Monodrom.lighthouse = lighthouse

    if (env != 'production') return;

    lighthouse
      .install()
      .then(function() {
        lighthouse.event('view', {
          category: 'screen', // required
          title:  Frond._(route.metadata.title, 'routes'), // required
          path: route.fullpath,
          id: route.id,
          url: url + route.fullpath
        })
      })
  }
  else {
    Frond.getWindow().Monodrom.lighthouse.event('view', {
      category: 'screen', // required
      title:  Frond._(route.metadata.title, 'routes'), // required
      path: route.fullpath,
      id: route.id,
      url: url + route.fullpath
    })
  }
}
