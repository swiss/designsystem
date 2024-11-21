import AudioPlayer from '../../ch/components/AudioPlayer.vue'
import Accordion from '../../ch/components/Accordion.vue'
import AccordionItem from '../../ch/components/AccordionItem.vue'
import TranscriptionExample from '../../ch/demo/TranscriptionExample.vue'

export default {
  title: 'Components/AudioPlayer',
  component: AudioPlayer,
}

export const Example = {
  components: { AudioPlayer, Accordion, AccordionItem, TranscriptionExample },
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
  render: (args) => ({
    components: { AudioPlayer, Accordion, AccordionItem, TranscriptionExample },
    setup: () => ({ ...args }),
    template: `
      <div>
        <AudioPlayer
          :url="url"
          :title="title"
          :description="description"
          :type="type"
          :copyright="copyright"
        />
        <Accordion v-if="displayTranscript" id="1">
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>`,
  }),
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
