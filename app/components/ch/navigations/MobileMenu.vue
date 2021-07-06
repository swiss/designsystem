<template>
  <div>
    <MainNavigation context="mobile" />
    <MetaNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigation,
    TopBarNavigation
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