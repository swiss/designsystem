<template>
  <Global :isMobileMenuOpen="getMobileMenuIsOpen()">
    <header>
      <TopBar />
      <TopHeader />
      <MainMenu />
      <MobileMenu />
      <Breadcrumb />
    </header>
    <main id="maincontent">
      <div class="container">
        <h1>Demo Application</h1>
        <div style="width: 100px; background: #f2f2f2; height: 3456px;"></div>
      </div>
    </main>
    <footer></footer>
  </Global>
</template>

<script>
import Global from '../components/ch/objects/Global.vue';
import TopBar from '../components/ch/sections/TopBar.vue';
import TopHeader from '../components/ch/sections/TopHeader.vue';
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue';
import MainMenu from '../components/ch/sections/MainMenu.vue';
import MobileMenu from '../components/ch/sections/MobileMenu.vue';

export default {
  name: 'index',
  components: {
    Global,
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
