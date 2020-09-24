module.exports = {
  div: {
    class: ['@props.css.site-section', '@props.css.burger-menu'],
    children: [
      {
        div: {
          class: '@props.css.section',
          children: [
            {div: {class: '@props.css.heading', text: 'Özel Tip Karekod Seçenekleri'}},
            {a: {class: '@props.css.item', href: '@router.zero.vcard', text: '1. vCard'}},
            {a: {class: '@props.css.item', href: '@router.zero.link', text: '2. Link (URL)'}}
          ]
        }
      }
    ]
  }
}
