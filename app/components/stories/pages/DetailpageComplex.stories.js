import store from '@/.storybook/store'
import detailPageComplex from '../../../pages/detailPageComplex.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageComplex },
  store: store,
  template: '<detailPageComplex />',
})

export default {
  title: 'Pages/Detail Page Complex',
  component: detailPageComplex,

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
