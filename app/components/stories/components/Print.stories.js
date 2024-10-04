import Print from '../../ch/components/Print.vue'

export default {
  title: 'Components/Print',
  component: Print,
}

export const Example = {
  render: () => ({
    components: { Print },
  template: '<Print />',
  }),
}
