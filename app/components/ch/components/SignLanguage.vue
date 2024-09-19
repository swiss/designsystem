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

<script setup>
import SvgIcon from './SvgIcon.vue'

function handleClick() {
  window.open('?path=/story/pages-detail-sign-language--example')
}
</script>
