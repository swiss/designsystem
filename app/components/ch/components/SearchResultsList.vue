<template>
  <ul class="search-results__list">
  <li
    v-for="(item, key) in itemList"
    :key="`${key}`"
  >
    <a
      :href="item.href"
      class="search-results__item"
    >
      <div class="search-results__item__text">
        <div class="text--sm text--light">
          {{ item.type }} | {{ item.date }}
        </div>
        <h3 class="text--xl text--bold">
          {{ item.title }}
        </h3>
        <div>
          {{ item.content }}
        </div>
        <div class="text--sm text--light">
          {{ item.specifications }}
        </div>
        <div class="text--sm text--light">
          {{ item.topics }}
        </div>
        <div class="search-results__icons">
          <SvgIcon
            v-if="item.isVideo"
            icon="Video"
            size="2xl"
          />
          <SvgIcon
            v-if="item.isEasyLanguage"
            icon="EasyLanguage"
            size="2xl"
          />
          <SvgIcon
            v-if="item.isSignLanguage"
            icon="SignLanguage"
            size="2xl"
          />
        </div>
      </div>
      <figure v-if="item.image" class="search-results__item__image">
        <picture>
          <source v-if="item.image.source" 
            :srcset="item.image.source.srcset"
            :media="item.image.source.media"
          />
          <img :src="item.image.src" :alt="item.image.alt"  class="shadow-2xl" />
        </picture>
      </figure>
    </a>

  </li>
</ul>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'SearchresultsList',
  components: {
    SvgIcon
  },
  props: {
    itemList: {
      type: Array,
      required: true
    }
  }
}
</script>

