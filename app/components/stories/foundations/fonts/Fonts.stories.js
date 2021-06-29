import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
  argTypes: {
    textStyle: { name:'style', control: { type: 'select', options: ['regular', 'italic', 'bold', 'bold-italic'] } },
    size: { control: { type: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Fonts },
  props: Object.keys(argTypes),
  template: '<Fonts :label="label" :textStyle="textStyle" :size="size" />',
});

export const Regular = Template.bind({});
Regular.args = { 
  label: 'Text',
  textStyle: 'regular',
  size: 'base'
};
Regular.storyName = 'Regular';

export const Italic = Template.bind({});
Italic.args = { 
  label: 'Text',
  textStyle: 'italic',
  size: 'base'
};
Italic.storyName = 'Italic';

export const Bold = Template.bind({});
Bold.args = { 
  label: 'Text',
  textStyle: 'bold',
  size: 'base'
};
Bold.storyName = 'Bold';

export const BoldItalic = Template.bind({});
BoldItalic.args = { 
  label: 'Text',
  textStyle: 'bold-italic',
  size: 'base'
};
BoldItalic.storyName = 'Bold Italic';