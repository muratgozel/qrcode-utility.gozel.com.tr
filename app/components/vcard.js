const {Component, Frond} = require('@frondjs/frond')
const {validationkit} = require('basekits')
const dayjs = require('dayjs')
const views = require('../views')
const patchSVG = require('../patchSVG')

module.exports = new Component({
  id: 'vcard',
  view: views.vcard,
  model: function() {
    const formSchema = {
      name: 'vcard',
      fields: {
        firstname: {value: ''},
        lastname: {value: ''},
        phone_num: {value: ''},
        email: {value: ''},
        company: {value: ''},
        work_address: {value: ''}
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

        // generate qr code
        const firstname = component.getFormField('firstname')
        const lastname = component.getFormField('lastname')

        const data = ['BEGIN:VCARD', 'VERSION:3.0']
        data.push('FN;CHARSET=UTF-8:' + firstname + ' ' + lastname)
        data.push('N;CHARSET=UTF-8:' + lastname + ';' + firstname + ';;;')
        data.push('TEL;TYPE=WORK,VOICE:' + component.getFormField('phone_num'))

        const email = component.getFormField('email')
        const company = component.getFormField('company')
        const workAddress = component.getFormField('work_address')
        if (validationkit.isNotEmpty(email)) {
          data.push('EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:' + email)
        }
        if (validationkit.isNotEmpty(company)) {
          data.push('ORG;CHARSET=UTF-8:' + company)
        }
        if (validationkit.isNotEmpty(workAddress)) {
          data.push('ADR;CHARSET=UTF-8;TYPE=WORK,PREF:;;' + workAddress)
          data.push('LABEL;CHARSET=UTF-8;TYPE=WORK,PREF:' + workAddress)
        }
        data.push('REV:' + dayjs().toISOString())
        data.push('END:VCARD')

        patchSVG(data.join("\r\n"), 'QR Code - ' + firstname + ' ' + lastname + '.svg')
      }
    }
  }
})
