import detailPageSimple from '../../../pages/detailPageSimple.vue'
import DetailPageSimpleMenuV2 from '../../../pages/detailPageSimpleMenuV2.vue'

export default {
  title: 'Pages/Detail Page Simple',
  component: detailPageSimple,
}

export const Example = {
  args: {
    isIntranet: false,
    isFreebrand: false,
  },
}

export const ExampleMenuV2 = {
  render: (args) => ({
    components: { DetailPageSimpleMenuV2 },
    setup: () => ({ args }),
    template: `<DetailPageSimpleMenuV2 v-bind="args" />`,
  }),
  args: {
    isOpen: false,
  },
}
