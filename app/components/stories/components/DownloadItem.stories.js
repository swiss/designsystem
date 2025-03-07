import DownloadItem from '../../ch/components/DownloadItem.vue'
import Btn from '../../ch/components/Btn.vue'

export default {
  title: 'Components/DownloadItem',
  component: DownloadItem,
}

export const Example = {
  render: (args) => ({
    components: { DownloadItem },
    setup: () => ({ args }),
    template: '<DownloadItem v-bind="args" />',
  }),
  args: {
    filename: 'dummy.pdf',
    title: 'Information on the usage of websites',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
    url: '/documents/dummy.pdf',
    type: 'PDF',
    date: '13.01.2022',
    headingLevel: 'h3',
  },
}

export const ListExample = {
  render: (args) => ({
    components: { DownloadItem, Btn },
    setup: () => ({ args }),
    template: `
      <div>
        <ul>
          <li v-for="item in args.content">
            <DownloadItem v-bind="item"  />
          </li>
        </ul>
        <div class="flex justify-end">
          <button type="button" class="btn btn--base btn--bare">
            <span class="btn__text">Alle Anzeigen</span>
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>
          </button>
        </div>
      </div>
    `,
  }),
  args: {
    content: [
      {
        filename: 'dummy.pdf',
        title: 'Information on the usage of websites',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
        url: '/documents/dummy.pdf',
        type: 'PDF',
        date: '13.01.2022',
      },
      {
        filename: 'image.png',
        title: 'Information on the usage of websites',
        description: '',
        url: '/images/html-structure.png',
        type: 'PNG',
        date: '22.01.2022',
      },
      {
        filename: 'image.png',
        title: 'Information on the usage of websites',
        description: '',
        url: '/images/html-structure.png',
        type: '',
        date: '',
      },
    ],
  },
}
