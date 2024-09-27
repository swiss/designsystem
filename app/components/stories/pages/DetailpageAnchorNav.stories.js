import detailPageAnchorNav from '../../../pages/detailPageAnchorNav.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPageAnchorNav },
  template: '<detailPageAnchorNav />',
})

export default {
  title: 'Pages/Detail Page Anchor Nav',
  component: detailPageAnchorNav,
  argTypes: {},
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    isOpen: false,
  },
}
