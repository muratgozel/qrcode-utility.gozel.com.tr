module.exports = {
  div: {
    children: [
      '@component.header',
      '@component.burgerMenu',
      {
        p: {
          class: ['@props.css.site-section', '@props.css.introduction'],
          text: 'Hoşgeldiniz. Başlamak için menü simgesine tıklayın.'
        }
      },
      '@component.footer'
    ]
  }
}
