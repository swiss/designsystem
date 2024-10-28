<template>
  <div>
    <ul>
      <li
        v-for="(value, key) in colors"
        :key="`${key}`"
        class="flex"
      >
        <ul
          v-if="typeof value == 'object'"
          class="storybook-color-list"
        >
          <h3
            class="storybook-color-list__title"
          >
            {{ key }} colors
          </h3>
          <li
            v-for="(subvalue, subkey) in value"
            :key="`${key}-${subkey}`"
            class="storybook-color-list__item"
          >
            <ColorListItem
              :name="`${key}-${subkey}`"
              :color="subvalue"
            />
          </li>
        </ul>

        <ColorListItem
          v-else
          :name="key"
          :color="value"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ColorListItem from './ColorListItem.vue'
import tailwindConfig from '../../../tailwind.config.js'


export default {
	name: 'ColorList',
  components: {
    ColorListItem
  },
  data: function () {
    return {
      colors: {}
    }
  },
  mounted() {
    this.colors = tailwindConfig.theme.colors
  }
}
</script>
