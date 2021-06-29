import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
  argTypes: {
  style: { control: { type: 'select', options: ['regular', 'italic', 'bold', 'bold-italic'] } },
},
};

const Template = (args, { argTypes }) => ({
  components: { Fonts },
  props: Object.keys(argTypes),
  template: '<Fonts :label="label" :style="style" />',
});

export const Regular = Template.bind({});
Regular.args = { 
  label: 'Text',
  style: 'regular'
};
Regular.storyName = 'Regular';

export const Italic = Template.bind({});
Italic.args = { 
  label: 'Text',
  style: 'italic'
};
Italic.storyName = 'Italic';

export const Bold = Template.bind({});
Bold.args = { 
  label: 'Text',
  style: 'bold'
};
Bold.storyName = 'Bold';

export const BoldItalic = Template.bind({});
BoldItalic.args = { 
  label: 'Text',
  style: 'bold-italic'
};
BoldItalic.storyName = 'Bold Italic';