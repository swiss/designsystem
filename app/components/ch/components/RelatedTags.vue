<template>
  <div>
    <hr v-if="!bare" class="separator separator--xl" />
    <ul class="list list--flex list--wrap">
      <li v-for="(tag, index) in tags" :key="index">
        <TagItem :key="tag.label + index" :label="tag.label" :to="tag.url" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import TagItem from './TagItem.vue'

defineProps({
  tags: {
    type: Array<{ label: string; url: string }>,
    required: true,
  },
  bare: {
    type: Boolean,
    default: () => false,
  },
})
</script>
