<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar />
      <TopHeader />
      <DesktopMenu />
      <MobileMenu />
      <Breadcrumb />
    </header>
    <main id="main-content">
      <div class="container">
        <h1>Demo Application</h1>
        <a href="#" class="link">Test skip link</a>
      </div>
    </main>
    <footer id="main-footer">

    </footer>
  </div>
</template>

<script>
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue';
import TopBar from '../components/ch/sections/TopBar.vue';
import TopHeader from '../components/ch/sections/TopHeader.vue';
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue';
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue';
import MobileMenu from '../components/ch/sections/MobileMenu.vue';

export default {
  name: 'Index',
  components: {
    AlterBodyClasses,
    TopBar,
    TopHeader,
    Breadcrumb,
    DesktopMenu,
    MobileMenu
  },
  methods: {
    getMobileMenuIsOpen () {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    }
  }

};
</script>
