import store from '@/.storybook/store'
import detailPublicationShop from '../../../pages/detailPublicationShop.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPublicationShop },
  store: store,
  template: '<detailPublicationShop />',
})

export default {
  title: 'Pages/Publication/Shop',
  component: detailPublicationShop,

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
