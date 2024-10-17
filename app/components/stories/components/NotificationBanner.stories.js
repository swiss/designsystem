import NotificationBanner from '../../ch/components/NotificationBanner.vue'

export default {
  title: 'Components/NotificationBanner',
  component: NotificationBanner,

  argTypes: {
    type: {
      table: { type: { summary: ['string: info, warning, error, success'] } },
      options: ['info', 'warning', 'error', 'success'],
      control: { type: 'select' },
    },
    isClosed: {
      table: { category: 'props' },
      control: { type: 'boolean' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { NotificationBanner },
    setup: () => ({ args }),
    template: `
    <div style="min-height: 100vh">
      <NotificationBanner v-bind="args" />
    </div>
    `,
  }),
  args: {
    type: 'info',
    isFixed: false,
    isClosed: false,
  },
}
