<template>
  <div>
    <button
      aria-label="Einfache Sprache öffnen"
      class="btn btn--bare"
      @click="handleClick"
    >
      <SvgIcon
        aria-hidden="true"
        icon="EasyLanguage"
        size="xl"
        class="easy-language-button__icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

function handleClick() {
  window.open(
    '?path=/story/pages-easy-sign-language-detail-easy-language--example',
  )
}
</script>
