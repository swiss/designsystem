import detailPageShoppingCart from '../../../pages/detailPageShoppingCart.vue'

export default {
  title: 'Pages/Detail Shopping Cart',
  component: detailPageShoppingCart,
  argTypes: {
    isOpen: {
      name: 'Is open',
      control: { type: 'boolean' },
    },
  },
}

export const Example = {
  args: {
    isOpen: false,
  },
}
