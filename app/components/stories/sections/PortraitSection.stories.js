import PortraitSection from '../../ch/sections/PortraitSection.vue'

const Template = () => ({
  props: [],
  components: { PortraitSection },
  template: '<PortraitSection />',
})

export default {
  title: 'Sections/Content/Portrait',
  component: PortraitSection,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
