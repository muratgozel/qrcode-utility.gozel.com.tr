module.exports = {
  fetch: {
    test: function() { return 'fetch' in window },
    assets: [
      {
        id: 'polyfill-fetch',
        url: 'https://cdn.gozel.com.tr/js/packages/whatwg-fetch/v3.0/fetch.456c02ee2a49.js',
        async: false,
        location: 'headEnd'
      }
    ]
  }
}
