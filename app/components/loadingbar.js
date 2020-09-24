const {Component, Frond} = require('@frondjs/frond')
const views = require('../views')

module.exports = new Component({
  id: 'loadingbar',
  view: views.loadingbar,
  model: function() {
    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      },
      state: {
        disabled: false
      }
    }
  }
})
