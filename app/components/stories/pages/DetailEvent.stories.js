import detailEvent from '../../../pages/detailEvent.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailEvent },
  template: '<detailEvent />',
})

export default {
  title: 'Pages/Detail Page Event',
  component: detailEvent,

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
