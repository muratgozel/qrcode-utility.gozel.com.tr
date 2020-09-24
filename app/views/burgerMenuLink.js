module.exports = {
  div: {
    class: '@props.css.right',
    children: [
      {
        a: {
          id: 'burger-menu-link',
          href: '#',
          title: 'Menü',
          class: '@props.css.burger-menu-link',
          children: {
            'case @state.isActive = true': '@component.svg-close',
            'otherwise': '@component.svg-burger-menu'
          }
        }
      }
    ]
  }
}
