import detailSimpleLanguage from '../../../pages/detailSimpleLanguage.vue'

export default {
  title: 'Pages/Easy & Sign Language/Detail Sign Language',
  component: detailSimpleLanguage,
}

export const Example = {
  render: (args, { viewMode }) => {
    const setup = () => ({ ...args })
    if (viewMode === 'docs') {
      return {
        setup,
        components: { detailSimpleLanguage },
        template: '<detailSimpleLanguage :isSignLanguage="true" />',
      }
    } else {
      return {
        setup,
        components: { detailSimpleLanguage },
        template:
          '<detailSimpleLanguage :isSignLanguage="true" :useStickyNavigation="useStickyNavigation" />',
      }
    }
  },
  args: {
    isEasyLanguage: false,
    isSimpleLanguage: false,
    useStickyNavigation: true,
  },
}
