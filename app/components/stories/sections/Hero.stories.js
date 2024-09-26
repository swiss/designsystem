import Hero from '../../ch/sections/Hero.vue'
import Btn from '../../ch/components/Btn.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hero, Btn },
  template: `
    <Hero :type="type" :meta-infos="metaInfos" :authors="authors">
      <template
        v-if="${args.type == 'main-image' || args.type == 'default'}"
        v-slot:image
      >
        <picture  v-if="${args.type == 'main-image'}">
          <source srcset="https://picsum.photos/1282/961/?image=29" media="(min-width: 1800px)">
          <source srcset="https://picsum.photos/1192/894/?image=28" media="(min-width: 1024px)">
          <source srcset="https://picsum.photos/800/600/?image=29" media="(min-width: 768px)">
          <source srcset="https://picsum.photos/680/510/?image=28" media="(min-width: 480px)">
          <img src="https://picsum.photos/480/360/?image=29" alt="ratio is 4/3">
        </picture>
        <picture v-if="${args.type == 'default'}">
          <source srcset="https://picsum.photos/1282/721/?image=29" media="(min-width: 1800px)">
          <source srcset="https://picsum.photos/1192/670/?image=28" media="(min-width: 1024px)">
          <source srcset="https://picsum.photos/800/450/?image=29" media="(min-width: 768px)">
          <source srcset="https://picsum.photos/680/382/?image=28" media="(min-width: 480px)">
          <img src="https://picsum.photos/480/270/?image=29" alt="ratio is 16/9">
        </picture>
      </template>
        <template v-slot:title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </template>
        <template v-slot:subtitle>
          Pellentesque dui dui, eleifend ac interdum eget, consectetur in odio.
        </template>
      <template v-if="${args.type !== 'main-image'} v-slot:title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </template>
      <template
        v-if="${args.type !== 'title-only'}"
        v-slot:description
      >
        Pellentesque dui dui, eleifend ac interdum eget, consectetur in odio. Suspendisse potenti. Integer a mi ullamcorper, fermentum nisi quis, efficitur velit.
      </template>
      <template
        v-if="${args.type == 'main-image' || args.type == 'main'}"
        v-slot:cta
      >
        <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Unsere Dienstleistungen"
          />
      </template>
    </Hero>
    `,
})

export default {
  title: 'Sections/Content/Hero',
  components: Hero,

  argTypes: {
    type: {
      name: 'Type',

      control: {
        type: 'select',
        options: [
          'default',
          'main',
          'main-image',
          'hub',
          'title-only',
          'hidden',
        ],
      },
    },

    metaInfos: {
      name: 'MetaInfos',
      value: undefined,
    },

    authors: {
      name: 'Authors',
      value: undefined,
    },
  },
}

export const MainWithoutImage = {
  render: Template.bind({}),
  name: 'Main without image',

  args: {
    type: 'main',
  },
}

export const MainWithImage = {
  render: Template.bind({}),
  name: 'Main with image',

  args: {
    type: 'main-image',
  },
}

export const HubPage = {
  render: Template.bind({}),
  name: 'Hub page',

  args: {
    type: 'hub',
  },
}

export const DetailPage = {
  render: Template.bind({}),
  name: 'Detail page',

  args: {
    type: 'default',
    metaInfos: ['Webartikel', '23. Februar 2022'],

    authors: [
      {
        name: 'Maria Muster',
        img: 'https://picsum.photos/120/120/?image=29',
      },
      {
        name: 'Jean-Jaques Langerename',
        img: 'https://picsum.photos/120/120/?image=30',
        url: '#',
      },
      {
        name: 'Hans Höllman',
        img: 'https://picsum.photos/120/120/?image=31',
      },
      {
        name: 'Katja Anna-Beerli',
        img: 'https://picsum.photos/120/120/?image=32',
      },
    ],
  },
}

export const DetailPageTitleOnly = {
  render: Template.bind({}),
  name: 'Detail page - title only',

  args: {
    type: 'title-only',
  },
}

export const ScreenReadersOnly = {
  render: Template.bind({}),
  name: 'Screen readers only',

  args: {
    type: 'sr-only',
  },
}
