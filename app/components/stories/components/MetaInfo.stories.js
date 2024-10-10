import MetaInfo from '../../ch/components/MetaInfo.vue'

export default {
  title: 'Components/Metainfo',
  component: MetaInfo,
  argTypes: {
    metaInfos: {
      control: {
        type: 'Array',
      },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { MetaInfo },
    setup: () => ({ args }),
    template: '<MetaInfo v-bind="args" />'
  }),
  args: {
    metaInfos: ["This is a meta info", "This is another meta info"]
  },
}
