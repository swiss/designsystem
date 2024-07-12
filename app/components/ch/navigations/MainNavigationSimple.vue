<template>
  <nav class="main-navigation main-navigation--desktop" aria-label="Main">
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
    <CarouselNavigation />
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import CarouselNavigation from '../navigations/CarouselNavigation.vue';
export default {
  name: 'MainNavigationSimple',
  components: {
    SvgIcon,
    CarouselNavigation,
  },
  props: {
    context: {
      type: String,
      required: true,
      validator: (prop) => ['desktop', 'mobile'].includes(prop),
    },
  },
}
</script>
