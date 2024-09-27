import SearchResultsFilters from '../../../pages/SearchResultsFilters.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResultsFilters },
  template:
    '<SearchResultsFilters :noResults="noResults" :isLoading="isLoading" />',
})

export default {
  title: 'Pages/Search Results with Filters',
  component: SearchResultsFilters,

  argTypes: {
    noResults: {
      name: 'No results',

      control: {
        type: 'boolean',
      },
    },
  },
}

export const WithResults = {
  render: Template.bind({}),
  name: 'With results',

  args: {
    noResults: false,
    isLoading: false,
  },
}

export const WithoutResults = {
  render: Template.bind({}),
  name: 'Without results',

  args: {
    noResults: true,
    isLoading: false,
  },
}

export const WhenLoading = {
  render: Template.bind({}),
  name: 'When Loading',

  args: {
    noResults: true,
    isLoading: true,
  },
}
