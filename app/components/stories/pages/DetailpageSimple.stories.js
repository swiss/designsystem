import detailPageSimple from '../../../pages/detailPageSimple.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageSimple },
  template: '<detailPageSimple />',
})

export default {
  title: 'Pages/Detail Page Simple',
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
