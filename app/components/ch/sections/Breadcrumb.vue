<template>
  <div
    id="breadcrumb-menu"
    class="breadcrumb-menu"
    :class="isOpen ? 'breadcrumb--is-open' : '' "
  >
    <div
      class="breadcrumb__overlay hidden"
      id="breadcrumb__overlay"
    />
    <div class="container container--flex">
      <BreadcrumbNavigation context="desktop" />
      <div
        id="breadcrumb-menu__drawer"
        class="breadcrumb-menu__drawer hidden"
      />
    </div>
  </div>
</template>

<script>
import BreadcrumbNavigation from "../navigations/BreadcrumbNavigation.vue"
import BreadcrumbNav from '../../../scripts/BreadcrumbNav.js'

export default {
  name: 'Breadcrumb',
  components: {
   BreadcrumbNavigation
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  mounted() {
    BreadcrumbNav.init(
      '#breadcrumb-menu > .container > nav',
      '#breadcrumb-menu__drawer',
      '#breadcrumb-menu__overlay'
    )
  }
}
</script>
