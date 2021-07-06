<template>
  <div
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : '' "
  >
    <div class="top-bar__bar">
      <div class="container">
        <button
          class="top-bar__btn"
          @click="isOpen = !isOpen"
        >
          Alle Schweizer Bundesbehörden
        </button>
        <div class="top-bar__meta">
          <MetaNavigation />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__content">
      <div class="container">
        Top bar content
      </div>
    </div>
  </div>
</template>

<script>
import MetaNavigation from '../navigations/MetaNavigation.vue'

export default {
  name: 'Logo',
  components: {
    MetaNavigation
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