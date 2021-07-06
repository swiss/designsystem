<template>
  <div>
    <header>
      <TopBar />
      <TopHeader />
      <MainMenu />
      <Breadcrumb />
      <MobileMenu />
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
import MainMenu from '../components/ch/sections/MainMenu.vue';
import MobileMenu from '../components/ch/sections/MobileMenu.vue';

export default {
  name: 'index',
  components: {
    TopBar,
    TopHeader,
    Breadcrumb,
    MainMenu,
    MobileMenu
  }
};
</script>
