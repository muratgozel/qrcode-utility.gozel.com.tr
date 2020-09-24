const FontFaceObserver = require('fontfaceobserver')
const {Frond, Component} = require('@frondjs/frond')
const views = require('../views')

module.exports = new Component({
  id: 'app',
  view: views.app,
  model: function() {
    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      },
      state: {
        ready: true
      },
      /*
      fetch: {
        id: 'hello',
        method: 'POST',
        path: '/hello/'
      }
      */
    }
  },
  on: {
    init: function() {
      Frond.inject('{{assets:css/app.css}}', {id: 'app-stylesheet', location: 'headEnd'})
    },
    insert: function() {
      const fonts = new FontFaceObserver('CDNNY')
      fonts.load().then(function() {
        Frond.getDocument().body.dataset.fonts = 'ready'
      }.bind(this))
    },
    fetch: function(response) {
      // update state after fetch
      //this.update({ready: true})
    }
  }
})
