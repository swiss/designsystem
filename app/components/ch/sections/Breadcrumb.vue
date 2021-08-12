<template>
  <div
    id="breadcrumb"
    class="breadcrumb"
  >
    <div
      id="breadcrumb__bar"
      class="breadcrumb__bar"
    >
      <div class="container container--flex">
        <BreadcrumbNavigation context="desktop" />
        <div
          id="breadcrumb__drawer"
          class="breadcrumb__drawer hidden"
        />
      </div>
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
  mounted() {
    BreadcrumbNav.init(
      '#breadcrumb > #breadcrumb__bar > .container > nav',
      '#breadcrumb__drawer',
    )
  }
}
</script>
