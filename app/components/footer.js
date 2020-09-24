const {Component, Frond} = require('@frondjs/frond')
const views = require('../views')

module.exports = new Component({
  id: 'footer',
  view: views.footer,
  model: function() {
    return {
      props: {
        currentYear: (new Date()).getFullYear(),
        css: Frond.getWindow().Monodrom.cssmodules.app
      }
    }
  }
})
