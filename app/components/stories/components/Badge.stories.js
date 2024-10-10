import Badge from '../../ch/components/Badge.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template: '<Badge :color="color" :size="size" :icon="icon" :label="label" />',
})

export default {
  title: 'Components/Badge',
  component: Badge,

  argTypes: {
    color: {
      control: {
        type: 'select',

        options: [
          'info',
          'error',
          'warning',
          'success',
          'gray',
          'red',
          'yellow',
          'orange',
          'green',
          'blue',
          'indigo',
          'purple',
          'pink',
        ],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['base', 'sm'],
      },
    },

    icon: {
      control: {
        type: 'select',
        options: ['Cancel', 'Checkmark', undefined],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    color: 'blue',
    size: 'base',
    icon: undefined,
    label: 'Badge',
  },
}
