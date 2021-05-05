<template>
  <div class="counter">
    <h1>{{ number }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    increment() {
      if (this.number >= 0) {
        this.number++;
      }
    },
    decrement() {
      if (this.number > 0) {
        this.number--;
      }
    }
  }
};
</script>

<style scoped>
.counter {
  display: inline-block;
  margin-left: 30%;
}

button {
  display: inline-block;
  padding: 20px;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(11, 11, 114);
}

h1 {
  text-align: center;
}
</style>
