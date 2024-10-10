import Accordion from '../../ch/components/Accordion.vue'
import AccordionItem from '../../ch/components/AccordionItem.vue'
import TranscriptionExample from '../../ch/demo/TranscriptionExample.vue'

export default {
  title: 'Components/Video/Transcript',
}

export const Example = {
  render: () => ({
    components: { Accordion, AccordionItem, TranscriptionExample },
    template: `
      <div>
        <figure>
          <div class="ratio ratio--16/9">
            <video
                controls
                src="/videos/demo.mp4"
              />
          </div>
          <figcaption>Video label — © Author Name</figcaption>
        </figure>
        <Accordion id="1" spaced>
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>
      `,
    }),
}
