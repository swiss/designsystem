import hubPage from '../../../pages/hubPage.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { hubPage },
  template: '<hubPage />',
})

export default {
  title: 'Pages/Hub Page',
  component: hubPage,

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
