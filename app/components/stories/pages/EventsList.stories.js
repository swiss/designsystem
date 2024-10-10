import eventList from '../../../pages/eventsList.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { eventList },
  template:
    '<eventList :noResults="noResults" :isLoading="isLoading" :filtersAreOpen="filtersAreOpen" :displayType="displayType" />',
})

export default {
  title: 'Pages/Events List',
  component: eventList,

  argTypes: {
    noResults: {
      name: 'No results',

      control: {
        type: 'boolean',
      },
    },

    filtersAreOpen: {
      name: 'Show filters',

      control: {
        type: 'boolean',
      },
    },

    displayType: {
      control: {
        type: 'select',
        options: ['list', 'grid'],
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
    filtersAreOpen: false,
  },
}

export const WithoutResults = {
  render: Template.bind({}),
  name: 'Without results',

  args: {
    noResults: false,
    isLoading: false,
    filtersAreOpen: true,
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
