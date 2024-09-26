import store from '@/.storybook/store'
import FormExample from '../../../pages/formExample'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormExample },
  store: store,
  template: '<FormExample />',
})

export default {
  title: 'Pages/Form Example',
  component: FormExample,

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
