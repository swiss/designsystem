import newsList from '../../../pages/newsList.vue'

export default {
  title: 'Pages/News List',
  component: newsList,
}

export const WithResults = {
  render: Template.bind({}),
  name: 'With results',
  args: {
    displayType: 'grid',
    filtersAreOpen: false,
    isLoading: false,
    noResults: false,
  },
}

export const WithoutResults = {
  args: {
    displayType: 'grid',
    filtersAreOpen: true,
    isLoading: false,
    noResults: true,
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
