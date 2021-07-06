<template>
  <div class="mainmenu">
    <div class="container container--flex">
      <MainNavigation context="desktop" />
    </div>
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'

export default {
  name: 'MainMenu',
  components: {
    MainNavigation
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>