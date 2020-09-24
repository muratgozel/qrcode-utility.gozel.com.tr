module.exports = {
  div: {
    children: [
      '@component.header',
      '@component.burgerMenu',
      {
        div: {
          class: ['@props.css.site-section', '@props.css.form-wrapper'],
          children: [
            {h3: {text: 'vCard Karekodu Oluştur'}},
            {p: {text: 'vCard, standart haline gelmiş, bir çok telefon/cihaz tarafından tanınan, irtibat kişisi tanımlamak için kullanılan bir dosya formatıdır. vCard formatındaki dosya, aynı zamanda karekodun içine gömülebilir ve karekodu okuyan cihaz, kullanıcısına kişiyi rehbere eklemek isteyip istemediğini sorar.'}},
            {h4: {text: 'Temel Bilgiler'}},
            {div: {class: '@props.css.input-group', children: [
              {div: {class: '@props.css.input', children: [
                {label: {text: 'Ad'}},
                {input: {type: 'text', name: 'firstname', dataset: {required: 'yes'}}}
              ]}},
              {div: {class: '@props.css.input', children: [
                {label: {text: 'Soyad'}},
                {input: {type: 'text', name: 'lastname', dataset: {required: 'yes'}}}
              ]}},
            ]}},
            {div: {class: '@props.css.input', children: [
              {label: {text: 'Telefon Numarası'}},
              {input: {type: 'text', name: 'phone_num', dataset: {required: 'yes'}}}
            ]}},
            {h4: {text: 'Diğer Ayrıntılar'}},
            {p: {style: {marginBottom: '1.5rem'}, children: [
              {strong: {text: 'Dikkat: '}},
              'Ayrıntı girdikçe karekod görseli karmaşıklaşır ve cihazlar tarafından okunabilirliği azalır. Karekod görselini büyük ölçülerde kullanmanız gerekebilir. Örneğin bu karekodu kartvizitinizde kullanacaksanız ayrıntı bilgiler girmeniz ',
              {strong: {text: 'önerilmez.'}}
            ]}},
            {div: {class: '@props.css.input', children: [
              {label: {text: 'E-posta'}},
              {input: {type: 'text', name: 'email'}}
            ]}},
            {div: {class: '@props.css.input', children: [
              {label: {text: 'Şirket Adı'}},
              {input: {type: 'text', name: 'company'}}
            ]}},
            {div: {class: '@props.css.input', children: [
              {label: {text: 'İş Adresi'}},
              {input: {type: 'text', name: 'work_address'}}
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
