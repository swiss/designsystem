import MobileMenu from '../../ch/sections/MobileMenu.vue'

export default {
  title: 'Sections/Header/MobileMenu',
  component: MobileMenu,
  decorators: [() => ({ template: '<div id="main-content"><story/></div>' })],
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
