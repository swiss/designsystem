<template>
  <div
    class="mobilemenu"
    :class="isOpen ? 'mobilemenu--is-open' : '' ">
    <h2>[Mobile menu]</h2>
    <MainNavigation context="mobile" />
    <MetaNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
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
      default: false,
    }
  },
}
</script>