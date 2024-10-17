import eventList from '../../../pages/eventsList.vue'

export default {
  title: 'Pages/Events List',
  component: eventList,
  argTypes: {
    noResults: {
      control: { type: 'boolean' },
    },
    filtersAreOpen: {
      control: { type: 'boolean' },
    },
    displayType: {
      table: { type: { summary: ['string: list, grid'] } },
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
    noResults: false,
    isLoading: false,
    filtersAreOpen: false,
  },
}

export const WithoutResults = {
  args: {
    displayType: 'grid',
    noResults: false,
    isLoading: false,
    filtersAreOpen: true,
  },
}

export const WhenLoading = {
  args: {
    displayType: 'grid',
    noResults: true,
    isLoading: true,
    filtersAreOpen: false,
  },
}
