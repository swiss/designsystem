<template>
  <ul class="search-results__list">
  <li
    v-for="(item, key) in itemList"
    :key="`${key}`"
  >
    <a
      :href="item.href"
      class="search-result"
    >
      <MetaInfo :metainfos="[item.type, item.date]" />
      <h2 class="search-result__title">
        {{ item.title }}
      </h2>
      <div class="search-result__description">
        {{ item.content }}
      </div>
      <div class="search-result__specs">
        {{ item.specifications }}
      </div>
      <figure v-if="item.image" class="search-result__image">
        <picture>
          <source v-if="item.image.source" 
            :srcset="item.image.source.srcset"
            :media="item.image.source.media"
          />
          <img :src="item.image.src" :alt="item.image.alt"  class="shadow-2xl" />
        </picture>
      </figure>
      <div class="search-result__icons">
        <SvgIcon
          v-if="item.isVideo"
          icon="Video"
          size="xl"
        />
        <SvgIcon
          v-if="item.isEasyLanguage"
          icon="EasyLanguage"
          size="xl"
        />
        <SvgIcon
          v-if="item.isSignLanguage"
          icon="SignLanguage"
          size="xl"
        />
      </div>
      <MetaInfo v-if="item.topics" :metainfos="item.topics" />
    </a>

  </li>
</ul>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from '../components/MetaInfo.vue'

export default {
  name: 'SearchresultsList',
  components: {
    SvgIcon,
    MetaInfo
  },
  props: {
    itemList: {
      type: Array,
      required: true
    }
  }
}
</script>

