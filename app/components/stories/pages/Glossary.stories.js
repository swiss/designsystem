import Glossar from '../../../pages/glossar.vue'

export default {
  title: 'Pages/Glossar',
  component: Glossar,
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
    },
    useStickySearch: {
      control: { type: 'boolean' },
    },
    showFilterSection: {
      control: { type: 'boolean' },
    },
  },
  render: (args, { viewMode }) => ({
    setup: () => ({ args, viewMode }),
    components: { Glossar },
    template: `
      <Glossar
        v-bind="args"
        :useStickySearch="viewMode === 'docs' ? false : args.useStickySearch"
      />`,
  }),
}

export const WithResultsSticky = {
  args: {
    isLoading: false,
    useStickySearch: true,
  },
}

export const WithResults = {
  args: {
    isLoading: false,
    useStickySearch: false,
  },
}

export const WithResultsStickyAndFilters = {
  args: {
    isLoading: false,
    useStickySearch: true,
    showFilterSection: true,
  },
}
