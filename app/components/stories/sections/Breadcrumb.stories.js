import Breadcrumb from '../../ch/sections/Breadcrumb.vue'

export default {
  render: (args) => ({
    setup: () => ({ args }),
    components: { Breadcrumb },
    template: `
    <div id="root">
      <Breadcrumb v-bind="args" />
    </div>
  `,
  }),
  title: 'Sections/Header/Breadcrumb',
  component: Breadcrumb,
}

export const Example = {}
