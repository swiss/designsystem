<template>
  <div>
    <ul>
      <li
        v-for="{ groupName, colorItems } in colors"
        :key="`${groupName}`"
        class="flex"
      >
        <ul class="storybook-color-list">
          <h3 class="storybook-color-list__title">{{ groupName }}</h3>
          <li
            v-for="{ name, value } in colorItems"
            :key="`${groupName}-${value}`"
            class="storybook-color-list__item"
          >
            <ColorListItem
              :name="`${groupName ? groupName + '-' : ''}${name}`"
              :color="value"
            />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ColorListItem from './ColorListItem.vue'
import tailwindConfig from '../../../tailwind.config.js'
import { reactive, onMounted } from 'vue'

type ColorItem = { name: string; value: string }
type ColorGroup = { groupName: string; colorItems: ColorItem[] }

const colors = reactive([] as ColorGroup[])

const flattenColors = (colorsRaw: any) => {
  const result: ColorGroup[] = []

  // Recursive function to process nested categories
  const processCategory = (category: ColorItem, groupName: string) => {
    const colorItems: ColorItem[] = []

    // Loop through each key in the category
    for (const [key, value] of Object.entries(category)) {
      if (typeof value === 'object') {
        // If the value is an object (nested category), recurse into it
        processCategory(value, key)
      } else if (typeof value === 'string') {
        // If the value is a color value, add it to the colorItems array
        colorItems.push({ name: key, value })
      } else {
        console.warn(`Unknown value type for key ${key}`)
      }
    }

    // If colorItems are found, push the group and its colors to the result
    if (colorItems.length > 0) {
      result.push({ groupName, colorItems })
    }
  }

  // Start the recursion for the top level of the object
  processCategory(colorsRaw, '')

  return result
}

// Put ungrouped colors at the top, everything else as appearing in tailwind.config.js
function colorSort(a: ColorGroup, b: ColorGroup) {
  if (a.groupName === '') return -1
  return 0
}

onMounted(() => {
  Object.assign(
    colors,
    flattenColors(tailwindConfig.theme?.colors).sort(colorSort),
  )
})
</script>
