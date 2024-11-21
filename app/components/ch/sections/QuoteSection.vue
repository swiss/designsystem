<template>
  <section :class="computedSectionClasses">
    <div class="container container--grid gap--responsive">
      <figure class="quote">
        <div class="quote__text">
          <blockquote class="quote__title">
            {{ quote }}
          </blockquote>
          <figcaption class="quote__author">
            {{ author }}
          </figcaption>
        </div>
        <picture v-if="image" class="quote__image">
          <source
            v-if="image.source"
            :srcset="image.source.srcset"
            :media="image.source.media"
          />
          <img :src="image.src" :alt="image.alt" class="shadow-2xl" />
        </picture>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    validator: (prop) =>
      [
        'white',
        'secondary-50',
        'secondary-100',
        'secondary-500',
        'secondary-600',
      ].includes(prop as string),
    default: () => 'secondary-50',
  },
  quote: {
    type: String,
    default: () => undefined,
  },
  author: {
    type: String,
    default: () => undefined,
  },
  image: {
    type: Object,
    default: () => undefined,
  },
})

const computedSectionClasses = computed(() => {
  let base = 'section '
  if (props.background) base += `bg--${props.background} `
  return base
})
</script>
