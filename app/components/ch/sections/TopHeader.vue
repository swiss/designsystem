<template>
  <div class="top-header">
    <div class="container">
      <Logo
        title="Design System for <br/>the Swiss Confederation"
        accronym="DSS"
      />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/ch/components/Logo.vue';
export default {
  name: 'topHeader',
  components: {
    Logo,
  }
};
</script>