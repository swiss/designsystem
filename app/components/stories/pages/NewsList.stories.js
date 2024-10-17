import newsList from '../../../pages/newsList.vue'

export default {
  title: 'Pages/News List',
  component: newsList,
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
