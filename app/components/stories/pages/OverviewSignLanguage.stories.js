import OverviewSignLanguage from '../../../pages/overviewSignLanguage.vue'

export default {
  title: 'Pages/Easy & Sign Language/Overview Sign Language',
  component: OverviewSignLanguage,
  render: (args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        components: { OverviewSignLanguage },
        template: '<OverviewSignLanguage />',
      }
    } else {
      return {
        components: { OverviewSignLanguage },
        template:
          '<OverviewSignLanguage useStickyNavigation="useStickyNavigation" />',
      }
    }
  },
}

export const Example = {
  args: {
    useStickyNavigation: true,
  },
}
