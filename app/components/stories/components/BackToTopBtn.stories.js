import BackToTopBtn from '../../ch/components/BackToTopBtn.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BackToTopBtn },
  template: '<BackToTopBtn :type="type" :wrapper="false" />',
})

export default {
  title: 'Components/BackToTopBtn',
  component: BackToTopBtn,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'negative', 'outline'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    type: 'outline',
  },
}
