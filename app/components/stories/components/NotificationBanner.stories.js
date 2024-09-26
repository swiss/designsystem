import NotificationBanner from '../../ch/components/NotificationBanner.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NotificationBanner },
  template: `
    <div style="min-height: 100vh">
      <NotificationBanner :isClosed="isClosed" :isFixed="isFixed" :type="type" />
    </div>
    `,
})

export default {
  title: 'Components/NotificationBanner',
  component: NotificationBanner,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    type: 'info',
    isFixed: false,
    isClosed: false,
  },
}
