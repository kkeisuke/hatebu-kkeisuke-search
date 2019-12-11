import { ref } from '@vue/composition-api'

export const useSubMenu = () => {
  const links = {
    home: {
      url: 'https://kkeisuke.com',
      icon: 'md-home',
      label: 'ホーム'
    },
    github: {
      url: 'https://github.com/kkeisuke/hatebu-kkeisuke-search',
      icon: 'logo-github',
      label: 'GitHub'
    },
    twitter: {
      url: 'https://twitter.com/kkeisuke',
      icon: 'logo-twitter',
      label: 'Twitter'
    }
  }

  const showMenu = ref(false)

  function openMenu() {
    showMenu.value = true
  }

  return {
    links,
    showMenu,
    openMenu
  }
}
