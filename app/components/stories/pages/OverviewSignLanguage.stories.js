import OverviewSignLanguage from '../../../pages/overviewSignLanguage.vue'

export default {
  title: 'Pages/Easy & Sign Language/Overview Sign Language',
  component: OverviewSignLanguage,
  render: (args, { viewMode }) => ({
    setup: () => ({ args, viewMode }),
    components: { OverviewSignLanguage },
    template: `
      <OverviewSignLanguage 
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`,
  }),
}

export const Example = {
  args: {
    useStickyNavigation: true,
  },
}
