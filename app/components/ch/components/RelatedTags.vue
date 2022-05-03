<template>
  <div class="related-tags">
    <div class="related-tags__tags">
      <Tag
        v-for="(tag, index) in tags"
        :key="tag.label+index"
        :label="tag.label"
        :to="tag.url"
      />
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue'

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
