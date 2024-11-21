import IndexPage from '../../../pages/indexPage.vue'

export default {
  title: 'Pages/Index Page',
  component: IndexPage,
  render: (args, { viewMode }) => ({
    setup: () => ({ args, viewMode }),
    components: { IndexPage },
    template: `
      <IndexPage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`,
  }),
}

export const WithResults = {
  args: {
    isLoading: false,
  },
}

export const WithStickyResults = {
  args: {
    isLoading: false,
    useStickySearch: true,
  },
}

export const WithResultsStickyAndFilters = {
  args: {
    isLoading: false,
    useStickySearch: true,
    useStickyFilters: true,
  },
}
