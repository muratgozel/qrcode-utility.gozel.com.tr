const {Frond} = require('@frondjs/frond')
const regionist = require('regionist')
const localStoragePro = require('local-storage-pro')

module.exports = function detectAppLocale() {
  const {
    localizedURLs, manipulateAddressBar, locales, locale, env
  } = Frond.getWindow().Monodrom.config
  const localesarr = locales.split(',')

  // regionist gives us a fresh guess about user language and region
  regionist.guess({remember: true})

  // check address bar
  const reMatchLocaleInPath = /^(\/[a-zA-Z]{2}-[a-zA-Z]{2})\/?(?![a-zA-Z0-9]+)/g
  const {pathname} = Frond.getWindow().location
  if (manipulateAddressBar && localizedURLs && reMatchLocaleInPath.test(pathname)) {
    const localeInURL = Frond.formatLocale( pathname.match(reMatchLocaleInPath)[0].slice(1) )
    for (var i = 0; i < localesarr.length; i++) {
      if (localesarr[i] == localeInURL) {
        if (env != 'production') console.log(`App locale "${localeInURL}" found in address bar.`)
        return localeInURL
      }
    }
  }

  // check local storage
  const storedLocale = localStoragePro.getItem('locale')
  if (storedLocale) {
    const localeInDevice = Frond.formatLocale(storedLocale)
    for (var i = 0; i < localesarr.length; i++) {
      if (localesarr[i] == localeInDevice) {
        if (env != 'production') console.log(`App locale "${localeInDevice}" found in local storage.`)
        return localeInDevice
      }
    }
  }

  // guess
  const guesses = regionist.get().locales
  if (guesses) {
    for (var i = 0; i < guesses.length; i++) {
      const localeByGuess = guesses[i]
      if (localesarr.indexOf(localeByGuess) !== -1) {
        if (env != 'production') console.log(`App locale "${localeByGuess}" found by guess.`)
        return localeByGuess
      }
    }
  }

  // return default
  return locale
}
