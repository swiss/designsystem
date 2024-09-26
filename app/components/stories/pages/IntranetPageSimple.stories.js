import store from '@/.storybook/store'
import detailPageSimple from '../../../pages/detailPageSimple.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageSimple },
  store: store,
  template: '<detailPageSimple :isIntranet="true" />',
})

export default {
  title: 'Pages/Intranet/Detail Page Simple',
  component: detailPageSimple,

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
