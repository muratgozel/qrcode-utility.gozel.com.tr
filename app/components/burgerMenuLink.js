const {Component, Frond} = require('@frondjs/frond')
const anime = require('animejs')
const views = require('../views')

module.exports = new Component({
  id: 'burgerMenuLink',
  view: views.burgerMenuLink,
  model: function() {
    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      },
      state: {
        isActive: false
      }
    }
  },
  on: {
    '#burger-menu-link': {
      ready: function(elem, component) {
        anime({
          targets: elem,
          scale: [1, 1.2, 1, 1.3, 1],
          delay: 500,
          easing: 'easeInQuart'
        })
      },
      click: function(event, component) {
        event.preventDefault()

        const newValue = !component.getState().isActive
        component.update({isActive: newValue})

        Frond.getComponent('burgerMenu').dom().style.opacity = newValue ? 1 : 0
        Frond.getComponent('burgerMenu').dom().style.zIndex = newValue ? 999 : -1
      }
    }
  }
})
