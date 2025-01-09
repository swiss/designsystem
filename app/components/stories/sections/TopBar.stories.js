import TopBar from '../../ch/sections/TopBar.vue'

export default {
  title: 'Sections/Header/TopBar',
  component: TopBar,
  argTypes: {
    isOpen: {
      table: { category: 'props' },
    },
  },
  decorators: [() => ({ template: '<div id="main-content"><story/></div>' })],
}

export const Example = {
  args: {
    isOpen: true,
  },
}
