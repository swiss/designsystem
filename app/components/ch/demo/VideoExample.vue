<template>
  <figure>
    <div class="ratio ratio--16/9">
      <video controls :src="videoFile">
        <track default kind="captions" srclang="en" :src="vttFile" />
      </video>
    </div>
    <figcaption>Video label — © Author Name</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const videoFile = ref('../../../public/videos/demo.mp4')
const vttFile = ref('../../../public/videos/demo.vtt')
</script>
