<template>
  <div
    id="breadcrumb"
    class="breadcrumb container container--flex"
  >
    <BreadcrumbNavigation />
    <div
      id="breadcrumb__drawer"
      class="breadcrumb__drawer hidden"
    />
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
      '#breadcrumb > nav'
    )
  }
}
</script>
