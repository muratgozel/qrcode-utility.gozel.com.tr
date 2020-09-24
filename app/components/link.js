const {Component, Frond} = require('@frondjs/frond')
const {validationkit} = require('basekits')
const dayjs = require('dayjs')
const views = require('../views')
const patchSVG = require('../patchSVG')

module.exports = new Component({
  id: 'link',
  view: views.link,
  model: function() {
    const formSchema = {
      name: 'vcard',
      fields: {
        url: {value: ''}
      }
    }

    return {
      props: {
        css: Frond.getWindow().Monodrom.cssmodules.app
      },
      form: formSchema
    }
  },
  on: {
    formUpdate: function(name, v, pv) {
      console.log(name, v, pv)
    },
    '#generate-qr': {
      click: function(event, component) {
        event.preventDefault()

        const data = component.getFormField('url')
        if (!validationkit.isURL(data)) {
          return;
        }
        patchSVG(data, 'QR Code - URL.svg')
      }
    }
  }
})
