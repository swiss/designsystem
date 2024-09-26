import store from '@/.storybook/store'
import Glossar from '../../../pages/glossar.vue'

const Template = (args, { argTypes, viewMode }) => {
  if (viewMode === 'docs') {
    return {
      props: Object.keys(argTypes),
      components: { Glossar },
      store: store,
      template: '<Glossar :isLoading="isLoading" />',
    }
  } else {
    return {
      props: Object.keys(argTypes),
      components: { Glossar },
      store: store,
      template:
        '<Glossar :isLoading="isLoading" :useStickySearch="useStickySearch" />',
    }
  }
}

export default {
  title: 'Pages/Glossar',
  component: Glossar,

  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },

    useStickySearch: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const WithResultsSticky = {
  render: Template.bind({}),
  name: 'With results sticky',

  args: {
    isLoading: false,
    useStickySearch: true,
  },
}

export const WithResults = {
  render: Template.bind({}),
  name: 'With results',

  args: {
    isLoading: false,
  },
}
