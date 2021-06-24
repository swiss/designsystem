import Btn from '../../ch/components/Btn.vue';

export default {
  component: Btn,
  title: 'Components/Button',
  argTypes: {
    type: { control: { type: 'select', options: ['outline', 'bare', 'filled', 'outline-negative', 'bare-negative'] } },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    icon: { control: { type: 'select', options: ['left', 'right', 'none', 'only'] } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Btn },
  props: Object.keys(argTypes),
  template: '<Btn :type="type" :size="size" :icon="icon" :label="label" />',
});

export const Outline = Template.bind({});
Outline.args = { 
  type: 'outline',
  size: 'md',
  icon: 'left',
  label: 'Button text',
 };
Outline.storyName = 'Outline button';