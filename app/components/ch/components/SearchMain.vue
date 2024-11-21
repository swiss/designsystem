<template>
  <div id="search-main-wrapper" class="search search--main">
    <div class="search__group">
      <h2 class="sr-only">Suche</h2>
      <Input
        id="search-main"
        :class="isMenuV2 ? 'search--desktop' : ''"
        type="search"
        label="Suche in dieser Website"
        placeholder="Suche"
        autocomplete="off"
      />
      <div class="search__button" title="Toggle search" @click="toggleSearch">
        <span class="search__button__title">Suche</span>
        <SvgIcon icon="Search" size="lg" class="search__button__icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import Input from './Input.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: () => false,
  },
  isMenuV2: {
    type: Boolean,
    default: () => false,
  },
})

const emit = defineEmits(['toggleSearch'])

function toggleSearch() {
  emit('toggleSearch')
}
</script>
