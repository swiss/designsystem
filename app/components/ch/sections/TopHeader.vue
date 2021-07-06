<template>
  <div class="top-header">
    <div class="container container--flex">
      <Logo
        title="Design System for <br/>the Swiss Confederation"
        accronym="DSS"
      />
      <div class="top-header__right">
        <MetaNavigation context="desktop" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/ch/components/Logo.vue';
import MetaNavigation from '../navigations/MetaNavigation.vue'

export default {
  name: 'topHeader',
  components: {
    Logo,
    MetaNavigation
  }
};
</script>