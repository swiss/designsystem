import MobileMenu from '../../ch/sections/MobileMenu.vue'

export default {
  title: 'Sections/Header/MobileMenu',
  component: MobileMenu,
}

export const Example = {
  args: {
    isOpen: true,
    isHomePage: false,
    showActiveNavigation: true,
    isSimplePage: true,
    isSticky: false,
  },
}
