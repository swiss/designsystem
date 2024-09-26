import MoreInfosAccordionSection from '../../ch/sections/MoreInfosAccordionSection.vue'

const Template = () => ({
  props: [],
  components: { MoreInfosAccordionSection },
  template: `
    <main>
      <MoreInfosAccordionSection />
    </main>
    `,
})

export default {
  title: 'Sections/Content/More Infos',
  component: MoreInfosAccordionSection,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
