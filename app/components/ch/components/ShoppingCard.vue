<template>
  <div class="shopping__card" :class="computedClasses">
    <div class="shopping__card__image">
      <div class="shopping__card-image-background" />
      <img
        v-if="image && image.src && image.alt"
        :src="image.src"
        :alt="image.alt"
      />
      <ImageNotAvailable
        v-else
        class="shopping__card-image-not-available"
        text="Kein Bild verfügbar"
      />
    </div>
    <div class="shopping__card-details-container">
      <div class="card__title">
        <h3>{{ title }}</h3>
      </div>
      <div class="shopping__card-item-price">
        <p>{{ itemPrice }}</p>
      </div>
      <div v-if="type === 'view'" class="shopping__card-amount">
        <p>Anzahl: {{ amount }}</p>
      </div>
    </div>

    <div v-if="type === 'edit'" class="shopping__card-amount-input">
      <input
        v-model="inputValue"
        type="number"
        class="input--outline text--base"
      />
    </div>

    <!-- Price mobile only -->
    <div class="shopping__card-price-mobile">
      <p>{{ price }}</p>
    </div>

    <div class="shopping__card-action-container">
      <!-- Price desktop only -->
      <div class="shopping__card-price">
        <p>{{ price }}</p>
      </div>
      <div class="shopping__card-action">
        <button
          v-if="type === 'view'"
          :aria-label="editLabel"
          class="btn btn--bare btn--icon-left"
          @click="editTriggered"
        >
          <SvgIcon icon="Pen" class="btn__icon" />
          <span class="btn__text">
            {{ editLabel }}
          </span>
        </button>

        <button
          v-if="type === 'edit'"
          :aria-label="editLabel"
          class="btn btn--bare btn--icon-left"
          @click="deleteTriggered"
        >
          <SvgIcon icon="Trash" class="btn__icon" />
          <span class="btn__text">
            {{ removeLabel }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageNotAvailable from './ImageNotAvailable.vue'
import SvgIcon from './SvgIcon.vue'
import { ref, computed, watch, onMounted, type PropType } from 'vue'

const inputValue = ref(0)

const props = defineProps({
  type: {
    type: String,
    validator: (prop) => ['view', 'edit'].includes(prop as string),
    default: () => 'edit',
  },
  image: {
    type: Object as PropType<{ src: string; alt: string }>,
    default: () => undefined,
  },
  title: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  deleteTriggered: {
    type: Function as PropType<() => void>,
    default: () => ({}),
  },
  editTriggered: {
    type: Function as PropType<() => void>,
    default: () => ({}),
  },
  removeLabel: {
    type: String,
    default: () => 'Remove',
  },
  editLabel: {
    type: String,
    default: () => 'Edit',
  },
  amount: {
    type: Number,
    default: () => 1,
  },
})

const computedClasses = computed(() => {
  let base = ''
  base += `shopping__card--${props.type} `
  return base
})

watch(props, function () {
  inputValue.value = props.amount
})

onMounted(() => {
  inputValue.value = props.amount
})
</script>
