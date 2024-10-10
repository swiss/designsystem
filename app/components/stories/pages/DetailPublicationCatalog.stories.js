import detailPublicationCatalog from '../../../pages/detailPublicationCatalog.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPublicationCatalog },
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
