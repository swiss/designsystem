<template>
  <div>
    <ul>
      <li v-for="(value, key) in colors" :key="`${key}`" class="flex">
        <ul v-if="typeof value == 'object'" class="storybook-color-list">
          <h3 class="storybook-color-list__title">{{ key }} colors</h3>
          <li
            v-for="(subvalue, subkey) in value"
            :key="`${key}-${subkey}`"
            class="storybook-color-list__item"
          >
            <ColorListItem :name="`${key}-${subkey}`" :color="subvalue" />
          </li>
        </ul>

        <ColorListItem v-else :name="key" :color="value" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import ColorListItem from './ColorListItem.vue'
import tailwindConfig from '../../../tailwind.config.js'
import { reactive, onMounted } from 'vue'

const colors = reactive({})

onMounted(() => {
  Object.assign(colors, tailwindConfig.theme.colors)
})
</script>
