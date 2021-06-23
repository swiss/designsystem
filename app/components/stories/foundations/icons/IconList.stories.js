import SvgIconList from './SvgIconList.vue';

export default {
  title: 'Foundations/Icons/List',
  component: {
    SvgIconList
  }
};

export const List = () => ({
  components: { SvgIconList },
  template: '<SvgIconList />',
});