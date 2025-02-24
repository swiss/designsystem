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
      </li>
      <li>
        <a href="#">
          <span>Informationsportal der Schweizer Behörden</span>
        </a>
      </li>
      <li class="top-bar-navigation-mobile-selector">
        <Select
          class="top-bar-navigation-select"
          :required="false"
          size="base"
          label="Darstellung"
          :on-select="handleSelect"
        >
          <option selected value="auto">Automatisch</option>
          <option value="dark">Darkmode</option>
          <option value="light">Lightmode</option>
        </Select>
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
import Select from '../components/Select.vue'
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

const handleSelect = function (e: string) {
  document.querySelector('html')?.setAttribute('data-theme', e)
}
</script>
