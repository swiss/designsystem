<template>
  <div class="tabs">
    <div class="tab__controls-container">
      <div class="tab__controls" role="tablist" aria-label="Additional Content">
        <button
          class="tab__control tab__control--active"
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="tab-1"
          @click="setActiveIndex(0)"
        >
          Publications
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-2"
          tabindex="-1"
          @click="setActiveIndex(1)"
        >
          Events
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-3"
          tabindex="-1"
          @click="setActiveIndex(2)"
        >
          FAQ
        </button>
      </div>
    </div>

    <div
      id="tab-1"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-1"
      class="tab__container"
      :class="
        activeIndex !== 0 ? 'tab__container--is-hidden' : 'vertical-spacing'
      "
    >
      <h4 class="h4">Title 1</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum nisl,
        ultricies quis aliquet ac, ultrices nec felis. Proin gravida purus et
        ipsum placerat
      </p>
      <ul class="list--default">
        <li>List item</li>
        <li>List item</li>
      </ul>
    </div>

    <div
      id="tab-2"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-2"
      class="tab__container"
      :class="
        activeIndex !== 1 ? 'tab__container--is-hidden' : 'vertical-spacing'
      "
    >
      <h4 class="h4">Title 2</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum nisl,
        ultricies quis aliquet ac, ultrices nec felis. Proin gravida purus et
        ipsum placerat
      </p>
      <ul class="list--default">
        <li>List item</li>
        <li>List item</li>
      </ul>
    </div>

    <div
      id="tab-3"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-3"
      class="tab__container"
      :class="
        activeIndex !== 2 ? 'tab__container--is-hidden' : 'vertical-spacing'
      "
    >
      <h4 class="h4">Title 3</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum nisl,
        ultricies quis aliquet ac, ultrices nec felis. Proin gravida purus et
        ipsum placerat
      </p>
      <ul class="list--default">
        <li>List item</li>
        <li>List item</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)

const setActiveIndex = function (index: number) {
  activeIndex.value = index
}
</script>
