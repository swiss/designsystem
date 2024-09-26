import store from '@/.storybook/store'
import searchResults from '../../../pages/searchResults.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchResults },
  store: store,
  template: '<searchResults :noResults="noResults" :isLoading="isLoading" />',
})

export default {
  title: 'Pages/Search Results',
  component: searchResults,

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
