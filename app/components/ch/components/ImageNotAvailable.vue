<template>
  <div class="image__not-available">
    <svg
      class="icon icon--image"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m8.20794 5.78467a2.292 2.292 0 1 0 2.29151 2.292 2.29476 2.29476 0 0 0 -2.29151-2.292zm0 3.834a1.542 1.542 0 1 1 1.54151-1.542 1.54362 1.54362 0 0 1 -1.54151 1.54198z"
      />
      <path
        d="m4.83294 4.70166v15.19922h15.05078v-15.19922zm14.30078 14.44922h-13.55078v-4.08988l2.15576-2.15524 2.28809 2.28711 5.53857-5.53808 3.56836 3.56836zm-3.56836-10.55664-5.53857 5.53809-2.28809-2.28711-2.15576 2.15527v-8.54883h13.55078v6.71094z"
      />
    </svg>

    <p class="image__not-available-text">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: () => 'Image not available',
  },
})
</script>
