<template>
  <nav class="meta-navigation meta-navigation--mobile" aria-label="Meta">
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
        <a href="#" class="meta-navigation__more">
          <span> Mehr </span>
          <SvgIcon icon="MoreFilled" size="md" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'
import { ref } from 'vue'

const screenSize = ref(0)

const props = defineProps({
  isFreebrand: {
    type: Boolean,
    default: false,
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
