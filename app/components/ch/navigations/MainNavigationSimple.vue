<template>
  <nav
    class="main-navigation main-navigation--desktop"
    aria-label="Main"
    id="main-navigation"
  >
    <ul class="menu-desktop">
      <li>
        <a href="javascript:alert('link')">
          <span>Alle</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link)" class="active">
          <span>Corona</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link')">
          <span>Bürgerrecht</span>
        </a>
      </li>
      <li>
        <a href="javascript:alert('link')">
          <span>Ukraine</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
export default {
  name: 'MainNavigationSimple',
  components: {
    SvgIcon,
  },
  props: {},
}
</script>
