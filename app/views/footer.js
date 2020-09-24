module.exports = {
  div: {
    class: ['@props.css.site-section', '@props.css.footer'],
    children: [
      {div: {class: '@props.css.footer-left', children: [
        {p: {text: 'Copyright © @props.currentYear Murat Gözel.'}}
      ]}},
      {div: {class: '@props.css.footer-right', children: [
        {a: {
          href: 'https://gozel.com.tr',
          target: '_new',
          title: 'GÖZEL Website',
          text: 'gozel.com.tr'
        }},
        {a: {
          href: 'https://github.com/muratgozel/qrcode-utility.gozel.com.tr',
          target: '_new',
          title: 'Checkout the source on Github',
          children: [
            {span: {text: 'Checkout the source on '}},
            '@component.svg-github-mark'
          ]
        }}
      ]}}
    ]
  }
}
