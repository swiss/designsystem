import detailSimpleLanguage from '../../../pages/detailSimpleLanguage.vue'

const Template = (args, { argTypes, viewMode }) => {
  if (viewMode === 'docs') {
    return {
      props: Object.keys(argTypes),
      components: { detailSimpleLanguage },
      template: '<detailSimpleLanguage :isSignLanguage="true" />',
    }
  } else {
    return {
      props: Object.keys(argTypes),
      components: { detailSimpleLanguage },
      template:
        '<detailSimpleLanguage :isSignLanguage="true" :useStickyNavigation="useStickyNavigation" />',
    }
  }
}

export default {
  title: 'Pages/Easy & Sign Language/Detail Sign Language',
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
