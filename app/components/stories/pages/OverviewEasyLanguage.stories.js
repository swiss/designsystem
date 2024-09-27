import OverviewEasyLanguage from '../../../pages/overviewEasyLanguage.vue'

const Template = (args, { argTypes, viewMode }) => {
  return {
    props: Object.keys(argTypes),
    components: { OverviewEasyLanguage },
    template:
      '<OverviewEasyLanguage useStickyNavigation="useStickyNavigation" />',
  }
}

export default {
  title: 'Pages/Easy & Sign Language/Overview Easy Language',
  component: OverviewEasyLanguage,

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
