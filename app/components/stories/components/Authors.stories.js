import Authors from '../../ch/components/Authors.vue'

export default {
  title: 'Components/Authors',
  component: Authors,
  argTypes: {
    bare: {
      control: { type: 'boolean' },
    },
  },
}

export const Example = {
  args: {
    authors: [
      {
        name: 'Maria Muster',
        img: 'https://picsum.photos/120/120/?image=29',
      },
      {
        name: 'Hans Höllman',
        initials: 'HH',
      },
      {
        name: 'Jean-Jaques Langerename',
        img: 'https://picsum.photos/120/120/?image=30',
        url: '#',
      },
      {
        name: 'Sofia de Souza',
      },
      {
        name: 'Katja Anna-Beerli',
        img: 'https://picsum.photos/120/120/?image=32',
      },
    ],
  },
}

export const ExampleWOPictures = {
  name: 'Example w/o pictures',
  args: {
    authors: [
      {
        name: 'Maria Muster',
      },
      {
        name: 'Jean-Jaques Langerename',
        url: '#',
      },
      {
        name: 'Hans Höllman',
      },
      {
        name: 'Katja Anna-Beerli',
      },
    ],
  },
}

export const OneAuthor = {
  args: {
    authors: [
      {
        name: 'Jean-Marie Rolf-Arnaud-Peterson',
        img: 'https://picsum.photos/120/120/?image=29',
      },
    ],
  },
}

export const OneAuthorWOPicture = {
  name: 'One author w/o picture',
  args: {
    authors: [
      {
        name: 'Maria Muster',
      },
    ],
  },
}
