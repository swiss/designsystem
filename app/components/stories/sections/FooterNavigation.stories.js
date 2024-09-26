import FooterNavigation from '../../ch/sections/FooterNavigation.vue'

const Template = () => ({
  props: [],
  components: { FooterNavigation },
  template: '<FooterNavigation />',
  parameters: {
    layout: 'fullscreen',
  },
})

export default {
  title: 'Sections/Footer/FooterNavigation',
  component: FooterNavigation,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
