<template>
  <div class="top-header">
    <div class="container container--flex">
      <Logo
        title="Design System for <br/>the Swiss Confederation"
        accronym="DSS"
      />
      <div class="top-header__right">
        <MetaNavigation context="desktop" />
        <SearchMain />
        <Burger
          @click.native="toggleMobileMenu()"
          :isOpen="getMobileMenuIsOpen()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/ch/components/Logo.vue';
import Burger from '~/components/ch/components/Burger.vue';
import SearchMain from '~/components/ch/components/SearchMain.vue';
import MetaNavigation from '../navigations/MetaNavigation.vue'

export default {
  name: 'topHeader',
  components: {
    Logo,
    Burger,
    SearchMain,
    MetaNavigation
  },
  methods: {
    toggleMobileMenu () {
      this.$store.dispatch('layout/toggleMobileMenu')
    },
    getMobileMenuIsOpen () {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    }
  }
};
</script>
