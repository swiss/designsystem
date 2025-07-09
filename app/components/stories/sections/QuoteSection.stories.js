import QuoteSection from '../../ch/sections/QuoteSection.vue'

export default {
  title: 'Sections/Content/Quote',
  component: QuoteSection,

  argTypes: {
    background: {
      table: {
        type: {
          summary: [
            'string: white, accent-01, accent-02, accent-03, accent-04',
          ],
        },
      },
      options: [
        'white',
        'accent-01',
        'accent-02',
        'accent-03',
        'accent-04',
      ],
      control: {
        type: 'select',
      },
    },
  },
}

export const Example = {
  args: {
    quote:
      'Unsere Welt entwickelt sich ohne Rücksicht, und das Ergebnis ist ein Verlust der Artenvielfalt, Energieprobleme, Staus in den Städten. Aber Geografie kann, wenn sie richtig eingesetzt wird, dazu genutzt werden, nachhaltige und lebenswertere Städte neu zu gestalten',
    author: 'Jack Dangermond, geograph',
    image: {
      src: 'https://picsum.photos/1024/768/?image=29',
      width: '1024',
      height: '768',
      alt: 'image name',
      source: {
        srcset: 'https://picsum.photos/2048/1152/?image=29',
        width: '2048',
        height: '1152',
        media: '(min-width: 1024px)',
      },
      caption: 'Image one caption —&nbsp;©&nbsp;Photograph Name',
    },
    background: 'accent-01',
  },
}
