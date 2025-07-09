import Pagination from '../../ch/components/Pagination.vue'

export default {
  title: 'Components/Pagination',
  component: Pagination,

  argTypes: {
    field: {
      control: { type: 'boolean' },
    },
    currentPage: {
      table: { category: 'props' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Pagination },
    setup: () => ({ args }),
    template: '<div><Pagination v-bind="args" /></div>',
  }),
  args: {
    currentPage: '1',
    totalPages: 'von 13 Seiten',
    paginationItems: [
      {
        icon: 'ChevronLeft',
        label: 'Previous Page',
        link: '#prev',
      },
      {
        icon: 'ChevronRight',
        label: 'Next Page',
        link: '#next',
      },
    ],
  },
}
