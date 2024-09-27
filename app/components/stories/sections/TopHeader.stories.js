import TopHeader from '../../ch/sections/TopHeader.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TopHeader },
  template: '<TopHeader />',
})

export default {
  title: 'Sections/Header/TopHeader',
  component: TopHeader,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
