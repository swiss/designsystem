import DesktopMenu from '../../ch/sections/DesktopMenu.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DesktopMenu },
  template: '<DesktopMenu :isOpen="isOpen" :showActiveNavigation="true" />',
})

export default {
  title: 'Sections/Header/DesktopMenu',
  component: DesktopMenu,

  argTypes: {
    isOpen: {
      name: 'Is open',

      control: {
        type: 'boolean',
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    isOpen: false,
  },
}
