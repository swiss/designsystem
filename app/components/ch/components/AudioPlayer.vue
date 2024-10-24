<template>
  <div class="audio-player">
    <audio controls :src="url" :type="type" :aria-label="title">
      Your browser cannot play this audio document directly<br />
      You can <a :href="url">open the document in a separate tab </a> and
      download it.
    </audio>
    <div v-if="title || description" class="audio-player__description">
      <span v-if="title">{{ title }}</span>
      <span v-if="title && description"> —&nbsp;</span>
      <span v-if="description">{{ description }}</span>
      <span v-if="copyright"> —&nbsp;©&nbsp;{{ copyright }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: () => undefined,
  },
  description: {
    type: String,
    default: () => undefined,
  },
  copyright: {
    type: String,
    default: () => undefined,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: () => undefined,
  },
})
</script>
