const {Component, Frond} = require('@frondjs/frond')
const views = require('../views')

module.exports = new Component({
  id: 'router',
  router: true,
  view: views.router,
  model: function() {
    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      },
      state: {
        route: {id: 'start', component: 'start'}
      }
    }
  }
})
