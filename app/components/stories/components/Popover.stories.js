import Popover from '../../ch/components/Popover.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popover },
  template: `
    <div style="padding: 60px 0;">
      <Popover
        :id="id"
        :label="label"
        :color="color"
        :icon="icon"
      >
        <p>Popover content</p>
        <a href="#">Link</a>
      </Popover>
    </div>
  `,
})

export default {
  title: 'Components/Popover',
  component: Popover,

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

    icon: {
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
    id: '1',
    color: 'blue',
    label: 'Click here to display the popover',
  },
}
