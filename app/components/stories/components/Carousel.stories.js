import CarouselExample from '../../ch/demo/CarouselExample.vue'

const TemplateDefault = (args) => ({
  setup: () => ({ ...args }),
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
    </div>`,
})

const TemplateBackgrounds = (args) => ({
  setup: () => ({ ...args }),
  components: { CarouselExample },
  template: `
    <div>
      <div class="section bg--accent-01">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="2"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-02">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="3"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-03">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="4"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-04">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="5"
            :slides="slides"
          />
        </div>
      </div>
    </div>`,
})

export default {
  render: TemplateDefault,
  title: 'Components/Carousel',
  component: CarouselExample,
}

export const WithBullets = {
  render: TemplateDefault.bind({}),
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
        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
    ],
  },
}

export const LargeNumberOfCards = {
  render: TemplateDefault.bind({}),
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
        title: 'Card title',
        description:
          'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
        footerInfo: 'Dienstleistungen & Produkte',
      },
    ],
  },
}
