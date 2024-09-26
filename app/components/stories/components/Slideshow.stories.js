import SlideshowExample from '../../ch/demo/SlideshowExample.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SlideshowExample },
  template: `
    <div class="container">
      <SlideshowExample
        :breakpoints="breakpoints"
        :paginationType="paginationType"
        :id="id"
        :slides="slides"
      />
    </div>
    `,
})

export default {
  title: 'Components/Slideshow',
  component: SlideshowExample,
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

        caption: {
          title: 'Image one title',
          description: 'Image one description',
          copyright: 'Photograph name',
        },
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

        caption: {
          title: 'Image two, title without description',
          copyright: 'Photograph name',
        },
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

        caption: {
          description: 'Image three, description only',
          copyright: 'Photograph name',
        },
      },
    ],
  },
}

export const WithFraction = {
  render: Template.bind({}),
  name: 'With fraction',

  args: {
    id: 2,
    paginationType: 'fraction',

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

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
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

        caption: {
          title: 'Image title with potentially long description',
          description:
            'Example of a very long textual description, the caption is displayed on several lines, the slideshow height is adapted automatically. Example of a very long textual description. ',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=10',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=10',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=11',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=11',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=114',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=114',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=128',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=128',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=15',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=15',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
      {
        image: {
          src: 'https://picsum.photos/1024/768/?image=177',
          width: '1024',
          height: '768',
          alt: 'image name',
        },

        source: {
          srcset: 'https://picsum.photos/2048/1152/?image=177',
          width: '2048',
          height: '1152',
          media: '(min-width: 1024px)',
        },

        caption: {
          title: 'Image title',
          copyright: 'Photograph name',
        },
      },
    ],
  },
}
