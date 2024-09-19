<template>
  <div class="storybook-icon">
    <svg-icon
      :icon="id"
      size="3xl"
    />
    <div class="storybook-icon__text">
      {{ id }}
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});
</script>
