import store from '@/.storybook/store'
import testHeroTitleOnly from '../../../pages/testHeroTitleOnly.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { testHeroTitleOnly },
  store: store,
  template: '<testHeroTitleOnly />',
})

export default {
  title: 'Pages/Test - Hero title only',
  component: testHeroTitleOnly,

  argTypes: {
    isOpen: {
      name: 'Is open',

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
    isOpen: false,
  },
}
