import Fonts from '../../../ch/foundations/Fonts.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Fonts },
  template: '<Fonts :label="label" :textStyle="textStyle" :size="size" />',
})

export default {
  title: 'Foundations/Fonts/Sizes and styles',
  component: Fonts,

  argTypes: {
    textStyle: {
      name: 'style and weight',

      control: {
        type: 'select',
        options: ['regular', 'italic', 'bold', 'bold-italic'],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    label: 'Confoederatio helvetica',
    textStyle: 'bold',
    size: '3xl',
  },
}
