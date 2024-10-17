import searchResults from '../../../pages/searchResults.vue'

export default {
  title: 'Pages/Search Results',
  component: searchResults,
}

export const WithResults = {
  args: {
    noResults: false,
    isLoading: false,
  },
}

export const WithoutResults = {
  args: {
    noResults: true,
    isLoading: false,
  },
}

export const WhenLoading = {
  args: {
    noResults: true,
    isLoading: true,
  },
}
