import Notification from '../../ch/components/Notification.vue'

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    type: {
      table: {
        type: {
          summary: [
            'string: info, warning, error, success, alert, hint',
          ]
        },
      },
      options: ['info', 'warning', 'error', 'success', 'alert', 'hint'],
      control: {
        type: 'select',
      },
    },
    icon: {
      options: [
          'InfoCircle',
          'WarningCircle',
          'CancelCircle',
          'HelpCircle',
          'CheckmarkCircle',
          undefined,
        ],
      control: {
        type: 'select',
      },
    },
  },
};

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
    setup: () => ({ args }),
    template: `
        <div>
          <ul class="list">
            <li v-for="item in args.notifications">
              <Notification v-bind="item" />
            </li>
            <hr class="separator separator--xl" />
            <Notification v-bind="args.separatedNotifications" />
          </ul>
        </div>
      `,
  }),
  args: {
    notifications: [
      {
        type: 'hint',
        text: 'Hint: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'info',
        text: 'Info: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'warning',
        text: 'Warning: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'error',
        text: 'Error: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'success',
        text: 'Success: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
    ],
    separatedNotifications: {
      type: 'alert',
      text: 'Alert: A new software update is available.',
      closeBtn: false,
      isClosed: false,
    }
  },
}

export const NotificationTypesWithIcons = {
  render: (args) => ({
    components: { Notification },
    setup: () => ({ args }),
    template: `
        <div>
          <ul class="list">
            <li v-for="item in args.notifications">
              <Notification v-bind="item" />
            </li>
            <hr class="separator separator--xl" />
            <Notification v-bind="args.separatedNotifications" />
          </ul>
        </div>
      `,
  }),
  args: {
    notifications: [
      {
        type: 'info',
        icon: 'InfoCircle',
        text: 'Info: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'warning',
        icon: 'WarningCircle',
        text: 'Warning: A new software update is available. <a href="#" target="_blank">Download</a>',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'error',
        icon: 'WarningCircle',
        text: 'Error: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
      {
        type: 'success',
        icon: 'CheckmarkCircle',
        text: 'Success: A new software update is available.',
        closeBtn: false,
        isClosed: false,
      },
    ],
    separatedNotifications: {
      type: 'alert',
      icon: 'WarningCircle',
      text: 'Alert: A new software update is available.',
      closeBtn: false,
      isClosed: false,
    }
  },
}

export const ComplexContent = {
  args: {
    type: 'info',
    icon: 'InfoCircle',
    text: '<h6 class="font--bold">Brand new!</h6><p>A new software update is available.</p><p><a class="link" href="javascript:void(0)">Discover the new version</a></p>',
    closeBtn: false,
    isClosed: false,
  },
}
