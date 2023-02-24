<template>
  <div>
    <hr v-if="!bare" class="separator separator--xl" />
    <ul class="list list--flex list--wrap">
      <li v-for="tag, index in tags">
        <TagItem
          :key="tag.label+index"
          :label="tag.label"
          :to="tag.url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TagItem from './TagItem.vue'

export default {
  name: 'RelatedTags',
  components: {
    TagItem,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
    bare: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
