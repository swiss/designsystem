<template>
  <div>
    <button
      aria-label="Gebärdensprache öffnen"
      class="btn btn--bare"
      @click="handleClick"
    >
      <SvgIcon
        aria-hidden="true"
        icon="SignLanguage"
        size="xl"
        class="sign-language-button__icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

function handleClick() {
  window.open(
    '?path=/story/pages-easy-sign-language-detail-sign-language--example',
  )
}
</script>
