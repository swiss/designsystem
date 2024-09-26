import Notification from '../../ch/components/Notification.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Notification },
  template:
    '<main><Notification :type="type" :icon="icon" :text="text" :closeBtn="closeBtn" :isClosed="isClosed" /></main>',
})

export default {
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
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    type: 'info',
    icon: 'InfoCircle',
    text: '<p>This is a notification with an <a href="#" target="_blank"> external link</a>.</p>',
    closeBtn: true,
    isClosed: false,
  },
}
