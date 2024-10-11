import detailSimpleLanguage from '../../../pages/detailSimpleLanguage.vue'

export default {
  title: 'Pages/Easy & Sign Language/Detail Easy Language',
  component: detailSimpleLanguage,
}

export const Example = {
  render: (args, { viewMode }) => {
    const setup = () => ({ ...args })
    if (viewMode === 'docs') {
      return {
        setup,
        components: { detailSimpleLanguage },
        template: '<detailSimpleLanguage :isEasyLanguage="true" />',
      }
    } else {
      return {
        setup,
        components: { detailSimpleLanguage },
        template:
          '<detailSimpleLanguage :isEasyLanguage="true" :useStickyNavigation="useStickyNavigation" />',
      }
    }
  },
  args: {
    isEasyLanguage: false,
    isSimpleLanguage: false,
    useStickyNavigation: true,
  },
}
