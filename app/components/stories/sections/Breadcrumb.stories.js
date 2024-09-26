import Breadcrumb from '../../ch/sections/Breadcrumb.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumb },
  template: '<Breadcrumb />',
})

export default {
  title: 'Sections/Header/Breadcrumb',
  component: Breadcrumb,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
