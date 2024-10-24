<template>
  <div :class="computedClass">
    <label for="lang-switcher" class="sr-only"> Select language </label>
    <Select id="lang-switcher" size="sm" bare :variant="type">
      <option>DE</option>
      <option>FR</option>
      <option>IT</option>
      <option disabled>RM</option>
      <option>EN</option>
    </Select>
  </div>
</template>

<script setup lang="ts">
import Select from '../components/Select.vue'
import { computed } from 'vue'

defineProps({
  type: {
    type: String,
    default: () => 'negative',
  },
})

const computedClass = computed(() => {
  const base = 'language-switcher'
  return base
})
</script>
