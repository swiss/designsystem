<template>
  <section class="section section--default section--pb-only">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs vertical-spacing">
        <div class="related-tags">
          <Tag
            v-for="(tag, index) in tags"
            :key="tag.label+index"
            :label="tag.label"
            :to="tag.url"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tag from '../components/Tag.vue'

export default {
  name: 'RelatedTags',
  components: {
    Tag,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  }
}
</script>
