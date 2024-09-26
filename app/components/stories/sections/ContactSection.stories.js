import ContactSection from '../../ch/sections/ContactSection.vue'

const Template = () => ({
  props: [],
  components: { ContactSection },
  template: '<ContactSection />',
})

export default {
  title: 'Sections/Content/Contact',
  component: ContactSection,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
