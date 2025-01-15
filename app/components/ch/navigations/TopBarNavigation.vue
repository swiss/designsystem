<template>
  <!-- Use different menu items for mobile menu demo -->
  <nav
    v-if="isMobileMenu"
    class="top-bar-navigation--mobile"
    aria-label="Top bar"
  >
    <ul>
      <li>
        <a href="#">
          <span>Anmelden</span>
        </a>
        <a href="#">
          <span>Informationsportal der Schweizer Behörden</span>
        </a>
      </li>
    </ul>
  </nav>
  <nav v-else class="top-bar-navigation" aria-label="Top bar">
    <ul>
      <li>
        <a href="#">
          <span>Leichte Sprache</span>
          <SvgIcon size="lg" icon="EasyLanguage" />
        </a>
      </li>
      <li>
        <a href="#">
          <span>Gebärdensprache</span>
          <SvgIcon size="lg" icon="SignLanguage" />
        </a>
      </li>
      <li>
        <a href="#">
          <span>Anmelden </span>
          <SvgIcon icon="User" size="lg" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'

defineProps({
  isMobileMenu: {
    type: Boolean,
    default: () => false,
  },
  context: {
    type: String,
    default: () => undefined,
  },
})
</script>
