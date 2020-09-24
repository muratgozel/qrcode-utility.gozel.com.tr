const {Component, Frond} = require('@frondjs/frond')
const views = require('../views')

module.exports = new Component({
  id: 'start',
  view: views.start,
  model: function() {
    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      }
    }
  }
})
