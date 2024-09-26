import Tabs from '../../ch/demo/Tabs.vue'
import TabsLarge from '../../ch/demo/TabsLarge.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs },
  template: '<div class="container"><br /><Tabs /><br /></div>',
})

const TemplateLarge = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabsLarge },
  template:
    '<div class="container bg--secondary-50"><br /><TabsLarge /><br /></div>',
})

export default {
  title: 'Components/Tabs',
  component: (Tabs, TabsLarge),
  argTypes: {},
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    variant: 'default',
  },
}

export const LargeExample = {
  render: TemplateLarge.bind({}),
  name: 'LargeExample',

  args: {
    variant: 'default',
  },
}
