import store from '@/.storybook/store'
import OverviewSignLanguage from '../../../pages/overviewSignLanguage.vue'

const Template = (args, { argTypes, viewMode }) => {
  if (viewMode === 'docs') {
    return {
      props: Object.keys(argTypes),
      components: { OverviewSignLanguage },
      store: store,
      template: '<OverviewSignLanguage />',
    }
  } else {
    return {
      props: Object.keys(argTypes),
      components: { OverviewSignLanguage },
      store: store,
      template:
        '<OverviewSignLanguage useStickyNavigation="useStickyNavigation" />',
    }
  }
}

export default {
  title: 'Pages/Easy & Sign Language/Overview Sign Language',
  component: OverviewSignLanguage,

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
