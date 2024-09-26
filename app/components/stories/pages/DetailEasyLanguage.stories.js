import store from '@/.storybook/store'
import detailSimpleLanguage from '../../../pages/detailSimpleLanguage.vue'

const Template = (args, { argTypes, viewMode }) => {
  if (viewMode === 'docs') {
    return {
      props: Object.keys(argTypes),
      components: { detailSimpleLanguage },
      store: store,
      template: '<detailSimpleLanguage :isEasyLanguage="true" />',
    }
  } else {
    return {
      props: Object.keys(argTypes),
      components: { detailSimpleLanguage },
      store: store,
      template:
        '<detailSimpleLanguage :isEasyLanguage="true" :useStickyNavigation="useStickyNavigation" />',
    }
  }
}

export default {
  title: 'Pages/Easy & Sign Language/Detail Easy Language',
  component: detailSimpleLanguage,

  argTypes: {
    useStickyNavigation: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    useStickyNavigation: true,
  },
}
