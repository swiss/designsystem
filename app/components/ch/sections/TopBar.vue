<template>
  <div
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : '' "
  >
    <div class="top-bar__bar">
      <div class="container container--flex">
        <button
          class="top-bar__btn"
          @click="isOpen = !isOpen"
        >
          Alle Schweizer Bundesbehörden
        </button>
        <div class="top-bar__right">
          <TopBarNavigation context="desktop" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">
        Top bar content
      </div>
    </div>
  </div>
</template>

<script>
import TopBarNavigation from '../navigations/TopBarNavigation.vue'

export default {
  name: 'TopBar',
  components: {
    TopBarNavigation
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
}
</script>