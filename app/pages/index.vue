<template>
  <div>
    <Header />
    <h1>Demo Application</h1>
    <Btn label="button" />
    <div>test</div>
  </div>
</template>

<script>
import Btn from '../components/ch/components/Btn.vue';
import Header from '../components/ch/sections/Header.vue'
export default {
  name: 'index',
  components: {
    Btn,
    Header
  },
  mounted() {
    // themeChange(false);
  }
};
</script>
