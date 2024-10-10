import Index from '../../../pages/index.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Index },
  template: '<Index />',
})

export default {
  title: 'Pages/Homepage',
  component: Index,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}