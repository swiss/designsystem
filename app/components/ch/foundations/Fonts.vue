<template>
<div>
  {{ label }}
</div>
</template>

<script>

export default {
  name: 'fonts',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
