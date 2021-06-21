<template>
  <div class="storybook-icon">
    <svg-icon
      :id="id"
      size="2xl"
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
		id: {
			type: String,
			required: true,
		},
	},
}
</script>
