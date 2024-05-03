<template>
  <div class="shopping__cart-ammount-indicator">
    {{ limittedAmmount }}
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartAmmountIndicator',
  props: {
    ammount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    limittedAmmount() {
      return this.ammount > 9 ? '9+' : this.ammount
    },
  },
}
</script>
