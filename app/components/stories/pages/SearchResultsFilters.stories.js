import SearchResultsFilters from '../../../pages/SearchResultsFilters.vue'

export default {
  title: 'Pages/Search Results with Filters',
  component: SearchResultsFilters,
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
    filtersAreOpen: false,
    displayType: 'grid',
    noResults: false,
    isLoading: false,
  },
}

export const WithoutResults = {
  args: {
    filtersAreOpen: false,
    displayType: 'grid',
    noResults: true,
    isLoading: false,
  },
}

export const WhenLoading = {
  args: {
    filtersAreOpen: false,
    displayType: 'grid',
    noResults: true,
    isLoading: true,
  },
}
