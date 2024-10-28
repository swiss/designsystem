import Logo from '../../ch/components/Logo.vue'


export default {
  component: Logo,
  title: 'Components/Logo',
  decorators: [() => ({ template: '<div style="margin: 2rem;"><story/></div>' })],
};

const Template = (args, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: '<Logo :title="title" :accronym="accronym" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Design System for <br/>the Swiss Confederation',
  accronym: 'DSS',
}
Default.storyName = 'Logotype';

