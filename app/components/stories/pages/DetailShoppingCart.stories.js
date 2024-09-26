import store from '@/.storybook/store'
import detailPageShoppingCart from '../../../pages/detailPageShoppingCart.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageShoppingCart },
  store: store,
  template: '<detailPageShoppingCart />',
})

export default {
  title: 'Pages/Detail Shopping Cart',
  component: detailPageShoppingCart,

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
