import ColorList from '../../../ch/demo/ColorList.vue'

const Template = (args, { argTypes }) => ({
  components: { ColorList },
  template: '<ColorList />',
})

export default {
  title: 'Foundations/Fonts/Colors',
  component: ColorList,
  argTypes: {},
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
  args: {},
}
