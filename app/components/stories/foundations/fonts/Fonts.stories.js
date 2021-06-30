import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
  argTypes: {
    textStyle: { control: { type: 'select', options: ['regular', 'italic', 'bold', 'bold-italic'] } },
    size: { control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'lg', 'base', 'sm', 'xs'] } },
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