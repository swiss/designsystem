<template>
  <aside :class="computedClasses">
    <div v-if="authorsWithImages.length" class="disc-images" aria-hidden="true">
      <div v-for="author in authors" :key="author.name" class="disc-image">
        <img v-if="author.img" :src="author.img" :title="author.name" />
        <div v-else-if="author.initials">
          {{ author.initials }}
        </div>
        <SvgIcon v-else icon="User" class="btn__icon text-secondary-300" />
      </div>
    </div>
    <address class="authors__names">
      {{ authors[0].prefix ? authors[0].prefix : 'von' }}

      <component
        :is="author.url ? 'a' : 'span'"
        v-for="author in authors"
        :key="author.name"
        :class="author.url ? 'link' : ''"
        :href="author.url"
        class="author__name"
      >
        {{ author.name }}
      </component>
    </address>
  </aside>
</template>

<script setup lang="ts">
import type { Author } from '../../../types'
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  authors: {
    type: Array<Author>,
    required: true,
  },
  bare: {
    type: Boolean,
    default: () => false,
  },
})

const authorsWithImages = computed(() => {
  return props.authors.filter((author) => {
    return author.img
  })
})

const computedClasses = computed(() => {
  let base = 'authors '
  if (props.bare) base += `authors--bare `
  return base
})
</script>
