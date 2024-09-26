import TopBar from '../../ch/sections/TopBar.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TopBar },
  template: '<TopBar :isOpen="isOpen" />',
})

export default {
  title: 'Sections/Header/TopBar',
  component: TopBar,

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
    isOpen: true,
  },
}
