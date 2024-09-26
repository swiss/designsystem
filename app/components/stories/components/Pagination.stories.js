import Pagination from '../../ch/components/Pagination.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    '<div><Pagination :type="type" :field="field" :currentPage="currentPage" :totalPages="totalPages" :paginationItems="paginationItems" /></div>',
})

export default {
  title: 'Components/Pagination',
  component: Pagination,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['outline', 'outline-negative'],
      },
    },

    field: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

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
