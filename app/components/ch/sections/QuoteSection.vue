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
          <source v-if="image.source"
            :srcset="image.source.srcset"
            :media="image.source.media"
          />
          <img :src="image.src" :alt="image.alt"  class="shadow-2xl" />
        </picture>
      </figure>
    </div>
  </section>
</template>

<script>

export default {
  name: 'QuoteSection',
  props: {
    background: {
      type: String,
      validator: (prop) => [
        'white',
        'secondary-50',
        'secondary-100',
        'secondary-500',
        'secondary-600',
      ].includes(prop),
      default: 'secondary-50',
    },
    quote: {
      type: String,
    },
    author: {
      type: String,
    },
    image: {
      type: Object
    },
  },
  computed: {
    computedSectionClasses () {
      let base = 'section '
      if (this.background) base += `bg--${this.background} `
      return base
    },
  },

}
</script>
