import Fonts from '../../../ch/foundations/Fonts.vue';

export default {
  component: Fonts,
  title: 'Foundations/Fonts',
};

const Template = (args, { argTypes }) => ({
  components: { Fonts },
  props: Object.keys(argTypes),
  template: '<Fonts :background="background" :label="label" />',
});

export const Regular = Template.bind({});
Regular.args = { label: 'Text' };
Regular.storyName = 'Regular';