<template>
  <section class="section bg--secondary-50">
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
    quote: {
      type: String,
    },
    author: {
      type: String,
    },
    image: {
      type: Object
    }
  },
  components: {},
}
</script>
