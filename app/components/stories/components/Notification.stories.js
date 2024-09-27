import Notification from '../../ch/components/Notification.vue'

const meta = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success', 'alert', 'hint'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [
          'InfoCircle',
          'WarningCircle',
          'CancelCircle',
          'HelpCircle',
          undefined,
        ],
      },
    },
  },
};

export default meta;

export const Example = {
  args: {
    type: 'info',
    icon: 'InfoCircle',
    text: '<p>This is a notification with an <a href="#" target="_blank"> external link</a>.</p>',
    closeBtn: true,
    isClosed: false,
  },
}

export const NotificationTypes = {
  render: (args) => ({
    components: { Notification },
    template: `
        <div>
          <Notification type="info" icon="InfoCircle" text="This is an info notification." />
          <Notification type="warning" icon="WarningCircle" text="This is a warning notification." />
          <Notification type="error" icon="CancelCircle" text="This is an error notification." />
          <Notification type="success" icon="HelpCircle" text="This is a success notification." />
          <Notification type="alert" text="This is an alert notification." />
          <Notification type="hint" text="This is a hint notification." />
        </div>
      `,
  }),
}
