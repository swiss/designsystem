import store from '@/.storybook/store'
import detailPublicationCatalog from '../../../pages/detailPublicationCatalog.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPublicationCatalog },
  store: store,
  template: '<detailPublicationCatalog />',
})

export default {
  title: 'Pages/Publication/Katalog',
  component: detailPublicationCatalog,

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
