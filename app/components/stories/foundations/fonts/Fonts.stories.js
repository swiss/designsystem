import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
  argTypes: {
    textStyle: { control: { type: 'select', options: ['regular', 'italic', 'bold', 'bold-italic'] } },
    size: { control: { type: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Fonts },
  props: Object.keys(argTypes),
  template: '<Fonts :label="label" :textStyle="textStyle" :size="size" />',
});

export const Example = Template.bind({});
Example.args = { 
  label: 'Text',
  textStyle: 'regular',
  size: 'base'
};
Example.storyName = 'Example';