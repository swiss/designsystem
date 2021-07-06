<template>
  <div>
    <header>
      <TopBar />
      <TopHeader />
      <MainNavigation context="desktop" />
      <Breadcrumb />
      <MobileMenu context="desktop" />
    </header>
    <main>
      <div class="container">
        <h1>Demo Application</h1>
      </div>
    </main>
    <footer></footer>

  </div>
</template>

<script>
import TopBar from '../components/ch/sections/TopBar.vue';
import TopHeader from '../components/ch/sections/TopHeader.vue';
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue';
import MainNavigation from '../components/ch/navigations/MainNavigation.vue';
import MobileMenu from '../components/ch/navigations/MobileMenu.vue';

export default {
  name: 'index',
  components: {
    TopBar,
    TopHeader,
    Breadcrumb,
    MainNavigation,
    MobileMenu
  }
};
</script>
