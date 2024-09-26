import store from '@/.storybook/store'
import testSpacings from '../../../pages/testSpacings.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { testSpacings },
  store: store,
  template: '<testSpacings />',
})

export default {
  title: 'Pages/Test - Spacings',
  component: testSpacings,

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
