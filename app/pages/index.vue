<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header>
      <TopBar />
      <TopHeader />
      <MainMenu />
      <MobileMenu />
    </header>
    <main id="maincontent">
      <Breadcrumb />
      <div class="container">
        <h1>Demo Application</h1>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue';
import TopBar from '../components/ch/sections/TopBar.vue';
import TopHeader from '../components/ch/sections/TopHeader.vue';
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue';
import MainMenu from '../components/ch/sections/MainMenu.vue';
import MobileMenu from '../components/ch/sections/MobileMenu.vue';

export default {
  name: 'index',
  components: {
    AlterBodyClasses,
    TopBar,
    TopHeader,
    Breadcrumb,
    MainMenu,
    MobileMenu
  },
  methods: {
    getMobileMenuIsOpen () {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    }
  }

};
</script>
