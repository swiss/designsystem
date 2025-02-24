import DesktopMenu from '../../ch/sections/DesktopMenu.vue'

export default {
  title: 'Sections/Header/DesktopMenu',
  component: DesktopMenu,
  decorators: [() => ({ template: '<div id="main-content"><story/></div>' })],
}

export const Example = {
  args: {
    showActiveNavigation: true,
    isSimplePage: false,
    isSticky: false,
  },
}
