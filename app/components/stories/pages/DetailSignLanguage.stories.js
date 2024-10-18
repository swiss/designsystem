import detailSimpleLanguage from '../../../pages/detailSimpleLanguage.vue'

export default {
  title: 'Pages/Easy & Sign Language/Detail Sign Language',
  component: detailSimpleLanguage,
}

export const Example = {
  render: (args, { viewMode }) => ({
    setup: () => ({ args, viewMode }),
    components: { detailSimpleLanguage },
    template: `
      <detailSimpleLanguage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`,
  }),
  args: {
    isEasyLanguage: false,
    isSimpleLanguage: false,
    isSignLanguage: true,
    useStickyNavigation: true,
  },
}
