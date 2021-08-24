<template>
  <ul :class="computedClasses">
    <li v-for="(item, index) in paginationItems" :key="`item-${index}`">
      <PaginationItem
        :icon="item.icon"
        :label="item.label"
        :link="item.link"
        :type="type"
        :size="size"
      />
    </li>
  </ul>
</template>

<script>

import PaginationItem from "~/components/ch/components/PaginationItem";

export default {
  name: 'pagination',
  components: {
    PaginationItem
  },
  data: function () {
    return {
      paginationItems : [
        {
          icon: "ChevronLineLeft",
          label: "Back to first Page",
          link: "#1"
        },
        {
          icon: "ChevronLeft",
          label: "Previous Page",
          link: "#prev"
        },
        {
          label: "1",
          link: "#1"
        },
        {
          label: "2",
          link: "#2"
        },
        {
          label: "3",
          link: "#3"
        },
        {
          label: "...",
        },
        {
          icon: "ChevronLeft",
          label: "Next Page",
          link: "#next"
        },
        {
          icon: "ChevronLineRight",
          label: "Go to last Page",
          link: "#last"
        },
      ]
    }
  },
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'outline',
        'outline-negative',
      ].includes(prop)
    },
    size: {
      type: String,
      validator: (prop) => [
        'sm',
        'base',
        'lg'
      ].includes(prop)
    },
  },
  computed: {
    computedClasses () {
      let base = 'pagination '
      if (this.type) base += `pagination--${this.type} `
      if (this.size) base += `pagination--${this.size} `
      if (this.icon !== 'none') base += `pagination--icon-only `
      return base
    },
    ariaLabel () {
      let ariaLabel = ''
      if (this.icon === 'ChevronLineLeft') ariaLabel = 'First page'
      if (this.icon === 'ChevronLeft') ariaLabel = 'Previous page'
      if (this.icon === 'ChevronLineRight') ariaLabel = 'Last page'
      if (this.icon === 'ChevronRight') ariaLabel = 'Next page'
      if (this.icon === 'none') ariaLabel = `Page ${this.label}`
      return ariaLabel
    }
  }
}
</script>
