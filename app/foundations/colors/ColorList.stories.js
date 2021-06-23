import ColorList from './ColorList.vue';

export default {
  title: 'Foundations/Colors/List',
  component: {
    ColorList
  }
};

export const List = () => ({
  components: { ColorList },
  template: '<ColorList />',
});