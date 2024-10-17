import SearchResultsFilters from '../../../pages/SearchResultsFilters.vue'

export default {
  title: 'Pages/Search Results with Filters',
  component: SearchResultsFilters,
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
