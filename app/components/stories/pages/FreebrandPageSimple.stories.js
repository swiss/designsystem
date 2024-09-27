import detailPageSimple from '../../../pages/detailPageSimple.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageSimple },
  template: '<detailPageSimple :isFreebrand="true" />',
})

export default {
  title: 'Pages/Freebrand/Detail Page Simple',
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
