import DownloadItem from '../../ch/components/DownloadItem.vue'
import Btn from '../../ch/components/Btn.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DownloadItem },
  template: `
    <DownloadItem :filename="filename" :title="title" :description="description" :url="url" :type="type" :date="date" :headingLevel="headingLevel" />
    `,
})

const LargeTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DownloadItem, Btn },
  template: `
    <div>
      <ul>
        <li v-for="item in content">
          <DownloadItem :filename="filename" :title="item.title" :description="item.description" :url="item.url" :type="item.type" :date="item.date" :headingLevel="headingLevel"  />
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
})

export default {
  title: 'Components/DownloadItem',
  component: DownloadItem,
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    filename: 'dummy.pdf',
    title: 'Information on the usage of websites',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
    url: '../../../public/documents/dummy.pdf',
    type: 'PDF',
    date: '13.01.2022',
    headingLevel: 'h3',
  },
}

export const List = {
  render: LargeTemplate.bind({}),
  name: 'List',

  args: {
    content: [
      {
        filename: 'dummy.pdf',
        title: 'Information on the usage of websites',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
        url: '../../../public/documents/dummy.pdf',
        type: 'PDF',
        date: '13.01.2022',
      },
      {
        filename: 'image.png',
        title: 'Information on the usage of websites',
        description: '',
        url: '../../../public/images/html-structure.png',
        type: 'PNG',
        date: '22.01.2022',
      },
      {
        filename: 'image.png',
        title: 'Information on the usage of websites',
        description: '',
        url: '../../../public/images/html-structure.png',
        type: '',
        date: '',
      },
    ],
  },
}
