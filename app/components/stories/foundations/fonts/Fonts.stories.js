import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
  argTypes: {
  textStyle: { name:'style', control: { type: 'select', options: ['regular', 'italic', 'bold', 'bold-italic'] } },
},
};

const Template = (args, { argTypes }) => ({
  components: { Fonts },
  props: Object.keys(argTypes),
  template: '<Fonts :label="label" :textStyle="textStyle" />',
});

export const Regular = Template.bind({});
Regular.args = { 
  label: 'Text',
  textStyle: 'regular'
};
Regular.storyName = 'Regular';

export const Italic = Template.bind({});
Italic.args = { 
  label: 'Text',
  textStyle: 'italic'
};
Italic.storyName = 'Italic';

export const Bold = Template.bind({});
Bold.args = { 
  label: 'Text',
  textStyle: 'bold'
};
Bold.storyName = 'Bold';

export const BoldItalic = Template.bind({});
BoldItalic.args = { 
  label: 'Text',
  textStyle: 'bold-italic'
};
BoldItalic.storyName = 'Bold Italic';