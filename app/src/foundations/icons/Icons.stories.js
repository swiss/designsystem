import SvgIconList from './SvgIconList.vue';

export default {
  title: 'Foundations/Icons',
  component: {
    SvgIconList
  }
};

export const List = () => ({
  components: { SvgIconList },
  template: '<SvgIconList />',
});