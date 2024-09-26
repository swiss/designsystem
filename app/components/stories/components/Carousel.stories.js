import CarouselExample from '../../ch/demo/CarouselExample.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CarouselExample },
  template: `
    <div class="section section--default">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="id"
            :slides="slides"
          />
          <div>
            Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel.
          </div>
        </div>
      </div>
    `,
})

const TemplateBackgrounds = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CarouselExample },
  template: `
    <div>
      <div class="section bg--secondary-50">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="2"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--secondary-100">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="3"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--secondary-500">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="4"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--secondary-600">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="5"
            :slides="slides"
          />
        </div>
      </div>
    </div>
    `,
})

export default {
  title: 'Components/Carousel',
  component: CarouselExample,
}

export const WithBullets = {
  render: Template.bind({}),
  name: 'With bullets',

  args: {
    id: 1,
    paginationType: 'bullets',

    slides: [
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=1045',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=1045',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
    ],
  },
}

export const LargeNumberOfCards = {
  render: Template.bind({}),
  name: 'Large number of cards',

  args: {
    id: 111,
    paginationType: 'bullets',

    slides: [
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=1045',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=1045',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=1045',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=1045',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
    ],
  },
}

export const Backgrounds = {
  render: TemplateBackgrounds.bind({}),
  name: 'Backgrounds',

  args: {
    id: 10,
    paginationType: 'bullets',

    slides: [
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=29',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=29',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=28',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=28',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=1045',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=1045',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
    ],
  },
}
