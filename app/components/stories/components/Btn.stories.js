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
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/irlwfQ7QgZ8pBHYqKSC8H9/%F0%9F%87%A8%F0%9F%87%ADDesign-System-Core-Library?node-id=183%3A110',
  },
}

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
