const {Frond, Router, _} = require('@frondjs/frond')
const routes = require('./routes')
const onAfterShift = require('./onAfterShift')

module.exports = function createRouter() {
  const {env, localizedURLs, locales, locale, url, manipulateAddressBar} = Frond.getWindow().Monodrom.config

  new Router({
    id: 'zero',
    componentID: 'router',
    defaultLocale: locale,
    availableLocales: locales.split(','),
    appLocale: Frond.config('locale'),
    basePath: '/',
    useLocalePaths: localizedURLs,
    omitDefaultLocalePath: true,
    useAddressBar: manipulateAddressBar,
    routes: routes,
    on: {
      afterShift: onAfterShift
    }
  })
}
