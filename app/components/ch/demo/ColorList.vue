<template>
  <div>
    <ul>
      <li v-for="(color, key) in colors" :key="`${key}`" class="flex">
        <ul v-if="typeof color == 'object'" class="storybook-color-list">
          <h3 class="storybook-color-list__title">{{ key }} colors</h3>
          <li
            v-for="(subvalue, subkey) in color"
            :key="`${key}-${subkey}`"
            class="storybook-color-list__item"
          >
            <ColorListItem :name="`${key}-${subkey}`" :color="subvalue" />
          </li>
        </ul>

        <ColorListItem v-else :name="key" :color="color" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ColorListItem from './ColorListItem.vue'
import tailwindConfig from '../../../tailwind.config.js'
import { reactive, onMounted } from 'vue'

const colors = reactive({} as Record<string, string | Record<string, string>>)

onMounted(() => {
  Object.assign(colors, tailwindConfig.theme?.colors)
})
</script>
