import Logo from './Logo.vue'


export default {
  title: 'Example/Logo',
  component: Logo,
  argTypes: {
    title: { control: 'text' },
    accronym: { control: 'text' },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Logo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<logo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Design System for <br/>the Swiss Confederation',
  accronym: 'DSS',
};
