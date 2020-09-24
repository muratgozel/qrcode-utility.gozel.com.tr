module.exports = [
  {
    id: 'start',
    component: 'start',
    path: '',
    parent: null,
    metadata: {
      title: 'Anasayfa',
      description: 'Oluşturmak istediğiniz karekod formatını seçin ve başlayın.'
    }
  },
  {
    id: 'vcard',
    component: 'vcard',
    path: 'vcard',
    parent: null,
    metadata: {
      title: 'vCard Karekodu Oluştur',
      description: 'vCard formatındaki karekodu okuyan cihaz, size vCard içerisindeki kişi bilgilerini rehbere eklemek isteyip istemediğinizi sorar.'
    }
  },
  {
    id: 'link',
    component: 'link',
    path: 'link',
    parent: null,
    metadata: {
      title: 'Link Karekodu Oluştur',
      description: 'Link karekodu, cihazın, belirtilen linke gitmek isteyip istemediğinize ilişkin bildirim göstermesine neden olur.'
    }
  }
]
