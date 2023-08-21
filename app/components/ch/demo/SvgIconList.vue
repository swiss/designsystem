<template>
  <div>
    <ul class="storybook-icon-list">
      <li
        v-for="item in $options.svgIconList"
        :key="item.id"
        class="storybook-icon-list__item"
      >
        <svg-icon-list-item
          :icon="item.icon"
          :id="item.id"
        />
      </li>
    </ul>
    <h2>CC Icons</h2>
    <ul class="storybook-icon-cc-list">
      <li
        v-for="item in $options.svgCCIconList"
        :key="item.id"
      >
        <svg-icon-list-item
          :id="item.id"
          autoWidth
        />
      </li>
    </ul>
  </div>
</template>

<script>

import SvgIconListItem from './SvgIconListItem.vue'

const svgContext = require.context(
	'!svg-inline-loader?' +
	'removeTags=true' + // remove title tags, etc.
	'&removeSVGTagAttrs=true' + // enable removing attributes
	'&removingTagAttrs=fill' + // remove fill attributes
	'!../../../assets/icons', // search this directory
	true, // search subdirectories
	/\w+\.svg$/i // only include SVG files
)

let icons = []
let CCIcons = []
let array = svgContext.keys()
for (let i = 0; i < array.length; ++i) {
  icons[i] = {}
  icons[i].id = array[i].replace(/^\.\/(.*)\.\w+$/, '$1')
}

// Extract CC Icons from the rest
CCIcons = icons.filter(icon => icon.id.startsWith('CC-'))
icons = icons.filter(icon => !icon.id.startsWith('CC-'))

export default {
	name: 'SvgIconList',
  components: {
    SvgIconListItem
  },
	svgIconList: icons,
  svgCCIconList: CCIcons,
}
</script>
