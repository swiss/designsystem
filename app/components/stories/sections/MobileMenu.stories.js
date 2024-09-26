import MobileMenu from '../../ch/sections/MobileMenu.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MobileMenu },
  template: '<MobileMenu :isOpen="isOpen" :showActiveNavigation="true" />',
})

export default {
  title: 'Sections/Header/MobileMenu',
  component: MobileMenu,

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
