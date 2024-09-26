import Print from '../../ch/components/Print.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Print },
  template: '<Print />',
})

export default {
  title: 'Components/Print',
  component: Print,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
  args: {},
}
