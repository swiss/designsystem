import FooterInformation from '../../ch/sections/FooterInformation.vue'

const Template = () => ({
  props: [],
  components: { FooterInformation },
  template: '<FooterInformation />',
})

export default {
  title: 'Sections/Footer/FooterInformation',
  component: FooterInformation,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
