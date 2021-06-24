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

import SvgIcon from '../components/SvgIcon.vue'

export default {
	name: 'SvgIconListItem',
  components: {
    SvgIcon
  },
	props: {
		id: {
			type: String,
			required: true,
		},
	},
}
</script>
