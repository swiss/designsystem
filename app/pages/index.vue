<template>
  <div>
    <header>
      <TopBar />
      <TopHeader />
      <Breadcrumb />
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
export default {
  name: 'index',
  components: {
    TopBar,
    TopHeader,
    Breadcrumb
  }
};
</script>
