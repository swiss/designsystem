<template>
  <div class="meta-navigation-container">
    <nav class="meta-navigation meta-navigation--desktop" aria-label="Meta">
      <ul>
        <li>
          <a href="#" class="meta-navigation__item"> Jobs </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item"> Kontakt </a>
        </li>
        <li>
          <a href="#" class="meta-navigation__item"> Medien </a>
        </li>
        <li>
          <a href="#">
            <span> Mehr </span>
            <SvgIcon icon="MoreFilled" size="md" />
          </a>
        </li>
      </ul>
    </nav>
    <LanguageSwitcher v-if="isFreebrand && screenSize > 1023" type="outline" />
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'
import { ref, onMounted } from 'vue'

const screenSize = ref(0)

defineProps({
  isFreebrand: {
    type: Boolean,
    default: () => false,
  },
})

const resizeWindow = function () {
  screenSize.value = document.body.clientWidth
}

onMounted(() => {
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
