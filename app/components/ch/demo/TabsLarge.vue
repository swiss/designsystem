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
        >
          Large Title
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-2"
          tabindex="-1"
        >
          Even larger title which pushes content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-3"
          tabindex="-1"
        >
          Largest title pushing the entire content by a lot
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-4"
          tabindex="-1"
        >
          More long titles with additional data and content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-5"
          tabindex="-1"
        >
          Additional Site Information
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-6"
          tabindex="-1"
        >
          Bonus Content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-7"
          tabindex="-1"
        >
          Bonus Content to show how very large titles go over the container
        </button>
      </div>
    </div>

    <div
      id="tab-1"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-1"
      class="tab__container"
    />

    <div
      id="tab-2"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-2"
      class="tab__container tab__container--is-hidden"
    />

    <div
      id="tab-3"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-3"
      class="tab__container tab__container--is-hidden"
    />
    <div
      id="tab-4"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-4"
      class="tab__container tab__container--is-hidden"
    />
    <div
      id="tab-5"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-5"
      class="tab__container tab__container--is-hidden"
    />
    <div
      id="tab-6"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-6"
      class="tab__container tab__container--is-hidden"
    />
    <div
      id="tab-7"
      tabindex="0"
      role="tabpanel"
      aria-labelledby="tab-7"
      class="tab__container tab__container--is-hidden"
    />
  </div>
</template>

<script setup lang="ts"></script>
