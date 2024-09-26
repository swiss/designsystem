import AudioPlayer from '../../ch/components/AudioPlayer.vue'
import Accordion from '../../ch/components/Accordion.vue'
import AccordionItem from '../../ch/components/AccordionItem.vue'
import TranscriptionExample from '../../ch/demo/TranscriptionExample.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AudioPlayer, Accordion, AccordionItem, TranscriptionExample },
  template: `
    <div>
      <AudioPlayer
        :url="url"
        :title="title"
        :description="description"
        :type="type"
        :copyright="copyright"
      />
      <Accordion v-if="displayTranscript" id="1" spaced>
        <AccordionItem
          id="10"
          title="Transcript"
        >
          <TranscriptionExample />
        </AccordionItem>
      </Accordion>
    </div>
    `,
})

export default {
  title: 'Components/AudioPlayer',
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    title: 'First of August speech',
    description:
      'Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    copyright: 'Reuters',
    url: 'https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3',
    type: 'audio/mp3',
    displayTranscript: false,
  },
}

export const Transcript = {
  render: Template.bind({}),
  name: 'Transcript',

  args: {
    title: 'First of August speech',
    description:
      'Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    copyright: 'Reuters',
    url: 'https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3',
    type: 'audio/mp3',
    displayTranscript: true,
  },
}
