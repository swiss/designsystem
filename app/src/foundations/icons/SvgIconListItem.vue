<template>
  <div class="storybook-icon">
    <svg-icon
      v-if="id"
      :id="id"
    />
    <div class="storybook-icon__text">
      {{ id }}
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
export default {
  components: { SvgIcon },
	name: 'SvgIconListItem',
	props: {
		icon: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
}
</script>
