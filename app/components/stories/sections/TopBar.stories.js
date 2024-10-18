import TopBar from '../../ch/sections/TopBar.vue'

export default {
  title: 'Sections/Header/TopBar',
  component: TopBar,
  argTypes: {
    isOpen: {
      table: { category: 'props' },
    },
  },
}

export const Example = {
  args: {
    isOpen: true,
  },
}
