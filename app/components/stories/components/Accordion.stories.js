import Accordion from '../../ch/components/Accordion.vue'
import AccordionItem from '../../ch/components/AccordionItem.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

export const Example = {
  render: (args) => ({
    setup: () => ({ ...args }),
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
      </Accordion>`,
  }),
  args: {},
}

export const LoadingExample = {
  render: (args) => ({
    setup: () => ({ ...args }),
    components: { Accordion, AccordionItem, SvgIcon },
    template: `
      <Accordion id="2">
      <AccordionItem
        id="10"
        title="Accordion item one"
      >
        <SvgIcon  icon="Spinner" :spin="true" size="2xl" class="accordion__loading-icon" />
      </AccordionItem>
    </Accordion>`,
  }),
  args: {},
}
