module.exports = {
  div: {
    class: ['@props.css.site-section', '@props.css.header'],
    children: [
      {
        div: {
          class: '@props.css.left',
          children: [
            {
              a: {
                href: '@router.zero.start',
                title: 'Anasayfa',
                class: '@props.css.logo-link',
                children: {
                  img: {
                    src: '{{assets:img/logo.png}}',
                    height: '60',
                    alt: 'Logo'
                  }
                }
              }
            },
            {
              div: {
                class: '@props.css.app-name',
                children: [
                  {h1: {text: 'Karekod Ustası'}},
                  {span: {text: ''}}
                ]
              }
            }
          ]
        }
      },
      '@component.burgerMenuLink'
    ]
  }
}
