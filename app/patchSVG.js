const {Frond} = require('@frondjs/frond')
const {saveAs} = require('file-saver')
const qrcode = require('./qr.js')

module.exports = function patchSVG(data, filename) {
  const svgelem = qrcode.generateSVG(data)
  const vectornode = Frond.getDocument().getElementById('qrcode-vector')
  vectornode.innerHTML = ''
  vectornode.appendChild(svgelem)

  // show download option
  vectornode.parentNode.dataset.hascode = 'yes'
  Frond
    .getDocument()
    .getElementById('download-qrcode')
    .addEventListener('click', function(event) {
      event.preventDefault()

      const blob = new Blob([vectornode.innerHTML], {type: "text/plain;charset=utf-8"})
      saveAs(blob, filename)
    })
}
