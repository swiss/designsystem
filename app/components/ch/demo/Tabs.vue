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
          Publications
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-2"
          tabindex="-1"
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
        >
          FAQ
        </button>
      </div>
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-1"
      aria-labelledby="tab-1"
      class="tab__container"
    >
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-2"
      aria-labelledby="tab-2"
      class="tab__container tab__container--is-hidden"
    >
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-3"
      aria-labelledby="tab-3"
      class="tab__container tab__container--is-hidden"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['compact'].includes(prop),
    },
  },

  computed: {
    computedClasses() {
      let base = 'table '
      if (this.variant) base += `table--${this.variant} `
      return base
    },
  },
}
</script>
