<template>
  <div class="storybook-color">
    <div
      class="storybook-color__palette"
      :style="`background-color: ${color} `" />
    <div class="storybook-color__text">
      {{ name }} <br>
      {{ color }}
    </div>
  </div>
</template>

<script>

export default {
	name: 'ColorListItem',
	props: {
		color: {
			type: String,
			required: true,
		},
    name: {
			type: String,
			required: true,
		},
	},
}
</script>
