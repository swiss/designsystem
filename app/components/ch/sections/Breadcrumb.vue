<template>
  <div
    class="breadcrumb"
    :class="isOpen ? 'breadcrumb--is-open' : '' "
  >
    <div class="breadcrumb__bar">
      <div class="container container--flex">
          <BreadcrumbNavigation context="desktop" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNavigation from "../navigations/BreadcrumbNavigation.vue"

export default {
  name: 'Breadcrumb',
  components: {
   BreadcrumbNavigation
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
