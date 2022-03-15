<template>
  <section class="section bg--secondary-50">
    <div class="container container--grid gap--responsive">
      <div class="quote">
        <div class="quote__text">
          <h3 class="quote__title">
            {{ quote }}
          </h3>
          <div class="quote__author">
            {{ author }}
          </div>
        </div>
        <figure v-if="image" class="quote__image">
          <picture>
            <source v-if="image.source" 
              :srcset="image.source.srcset"
              :media="image.source.media"
            />
            <img :src="image.src" :alt="image.alt"  class="shadow-2xl" />
          </picture>
        </figure>
      </div>
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
