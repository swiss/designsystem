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
  icon: 'none',
  label: 'Button text',
 };
Outline.storyName = 'Outline';

export const Bare = Template.bind({});
Bare.args = { 
  type: 'bare',
  size: 'md',
  icon: 'none',
  label: 'Button text',
 };
Bare.storyName = 'Bare';

export const Filled = Template.bind({});
Filled.args = { 
  type: 'filled',
  size: 'md',
  icon: 'none',
  label: 'Button text',
 };
Filled.storyName = 'Filled';

export const OutlineNegative = Template.bind({});
OutlineNegative.args = { 
  type: 'outline-negative',
  size: 'md',
  icon: 'none',
  label: 'Button text',
 };
OutlineNegative.storyName = 'Outline negative';

export const BareNegative = Template.bind({});
BareNegative.args = { 
  type: 'bare-negative',
  size: 'md',
  icon: 'none',
  label: 'Button text',
 };
BareNegative.storyName = 'Bare negative';