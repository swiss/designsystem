import Btn from '../../ch/components/Btn.vue';

export default {
  component: Btn,
  title: 'Components/Button',
};

const Template = (args, { argTypes }) => ({
  components: { Btn },
  props: Object.keys(argTypes),
  template: '<Btn :background="background" :label="label" />',
});

export const Primary = Template.bind({});
Primary.args = { background: '#ff0', label: 'Button' };
Primary.storyName = 'Primary button';

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
