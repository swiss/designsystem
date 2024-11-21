import Popover from '../../ch/components/Popover.vue'

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    color: {
      table: {
        type: {
          summary: [
            'string: info, error, warning, success, gray, red, yellow, orange, green, blue, indigo, purple, pink',
          ],
        },
      },
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
      control: {
        type: 'select',
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
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `
      <div style="padding: 60px 0;">
        <Popover v-bind="args" >
          <p>Popover content</p>
          <a href="#">Link</a>
        </Popover>
      </div>
    `,
  }),
  args: {
    id: '1',
    color: 'blue',
    label: 'Click here to display the popover',
  },
}
