<template>
  <div>
    <button
      aria-label="Print document"
      class="btn btn--bare"
      @click="handleClick"
    >
      <SvgIcon
        aria-hidden="true"
        icon="Printer"
        size="xl"
        class="print-button__icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

function handleClick() {
  window.print()
}
</script>
