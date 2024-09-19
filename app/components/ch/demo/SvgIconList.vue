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

<script setup>
import SvgIconListItem from './SvgIconListItem.vue'
</script>
