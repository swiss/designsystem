import Accordion from '../../ch/components/Accordion.vue'
import AccordionItem from '../../ch/components/AccordionItem.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion, AccordionItem },
  template: `
    <Accordion id="1">
      <AccordionItem
        id="10"
        title="Accordion item one"
      >
        <h4 class="h5">The title of the accordion item is a h3, therefore, as a subtitle, I am a h4 with a .h5 css class</h4>
        <p>Description here</p>
      </AccordionItem>
      <AccordionItem
        id="11"
        title="Accordion item two"
      >
        AccordionItem Content here
      </AccordionItem>
    </Accordion>
    `,
})

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
  args: {},
}
