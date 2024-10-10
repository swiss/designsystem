import MetaInfo from '../../ch/components/MetaInfo.vue'

export default {
  title: 'Components/Metainfo',
  component: MetaInfo,
}

export const Example = {
  render: (args) => ({
    components: { MetaInfo },
    setup: () => ({ args }),
    template: '<MetaInfo v-bind="args" />'
  }),
  args: {
    metainfos: ["This is a meta info", "This is another meta info"]
  },
}
