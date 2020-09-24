module.exports = {
  div: {
    children: [
      '@component.header',
      '@component.burgerMenu',
      {
        div: {
          class: ['@props.css.site-section', '@props.css.form-wrapper'],
          children: [
            {h3: {text: 'Link (URL) Karekodu Oluştur'}},
            {p: {style: {marginBottom: '1.5rem'}, text: 'Bir web sayfası linki karekoda gömülebilir ve bu karekodu okuyan telefon/cihaz, kullanıcısına bu linke gitmek isteyip istemediğini sorar.'}},
            {div: {class: '@props.css.input', children: [
              {label: {text: 'URL'}},
              {input: {type: 'text', name: 'url', dataset: {required: 'yes'}}}
            ]}},
            {div: {
              class: '@props.css.form-actions',
              children: [
                {div: {
                  class: '@props.css.form-actions-left',
                  children: [
                    {a: {href: '#', id: 'generate-qr', text: 'Karekodu Oluştur'}}
                  ]
                }},
                {div: {
                  class: '@props.css.form-actions-right',
                  children: []
                }}
              ]
            }},
            {div: {
              class: '@props.css.qrcode-wrapper',
              dataset: {hascode: 'no'},
              children: [
                {div: {id: 'qrcode-vector', class: '@props.css.qrcode-vector'}},
                {div: {class: '@props.css.qrcode-actions', children: [
                  {a: {href: '#', id: 'download-qrcode', text: 'İndir (SVG)'}}
                ]}}
              ]
            }}
          ]
        }
      },
      '@component.footer'
    ]
  }
}
