import Tabs from '../../ch/demo/Tabs.vue'
import TabsLarge from '../../ch/demo/TabsLarge.vue'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Example = {
  render: () => ({
    components: { Tabs },
    template: '<div class="container"><br /><Tabs /><br /></div>',
  }),
}

export const LargeExample = {
  render: () => ({
    components: { TabsLarge },
    template:
      '<div class="container bg--accent-01"><br /><TabsLarge /><br /></div>',
  }),
}
