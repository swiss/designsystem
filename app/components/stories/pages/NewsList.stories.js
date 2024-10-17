import newsList from '../../../pages/newsList.vue'

export default {
  title: 'Pages/News List',
  component: newsList,
  argTypes: {
    noResults: {
      control: { type: 'boolean' },
    },
    filtersAreOpen: {
      table: { category: 'props' },
      control: { type: 'boolean' },
    },
    displayType: {
      table: { category: 'props', type: { summary: ['string: list, grid'] } },
      options: ['list', 'grid'],
      control: { type: 'select' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
}

export const WithResults = {
  args: {
    displayType: 'grid',
    filtersAreOpen: false,
    isLoading: false,
    noResults: false,
  },
}

export const ShowFilters = {
  args: {
    displayType: 'grid',
    filtersAreOpen: true,
    isLoading: false,
    noResults: false,
  },
}

export const WhenLoading = {
  args: {
    displayType: 'grid',
    filtersAreOpen: false,
    isLoading: true,
    noResults: true,
  },
}
