<template>
  <div class="image-not-available">
    <SvgIcon size="2xl" icon="Image" />
    <p class="mt-2">{{ text }}</p>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  name: 'ImageNotAvailable',
  components: {
    SvgIcon,
  },
  props: {
    text: {
      type: String,
      default: 'Image not available',
    },
  },
}
</script>
