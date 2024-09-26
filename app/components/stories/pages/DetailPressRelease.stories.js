import store from '@/.storybook/store'
import detailPressRelease from '../../../pages/detailPressRelease.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { detailPressRelease },
  store: store,
  template: '<detailPressRelease />',
})

export default {
  title: 'Pages/Detail Press release',
  component: detailPressRelease,

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
