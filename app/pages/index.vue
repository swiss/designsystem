<template>
  <div>
    <h1>Demo Application</h1>
    <Btn label="button" />
    <div>test</div>
  </div>
</template>

<script>
import Btn from '../components/ch/components/Btn.vue';

export default {
  name: 'index',
  components: {
    Btn
  },
  mounted() {
    // themeChange(false);
  }
};
</script>
