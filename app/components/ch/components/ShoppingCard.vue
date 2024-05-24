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
        class="shopping__card-image-not-available"
        v-else
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
      <div v-if="type === 'view'" class="shopping__card-ammount">
        <p>Anzahl: {{ ammount }}</p>
      </div>
    </div>

    <div v-if="type === 'edit'" class="shopping__card-ammount-input">
      <input
        type="number"
        v-model="inputValue"
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

<script>
import ImageNotAvailable from './ImageNotAvailable.vue'
import SvgIcon from './SvgIcon.vue'
export default {
  name: 'ShoppingCard',
  components: {
    SvgIcon,
    ImageNotAvailable,
  },
  props: {
    type: {
      type: String,
      validator: (prop) => ['view', 'edit'].includes(prop),
      default: 'edit',
    },
    image: {
      type: Object, // {
      //   src: String,
      //   alt: String,
      // },
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
      type: Function,
      default: () => ({}),
    },
    editTriggered: {
      type: Function,
      default: () => ({}),
    },
    removeLabel: {
      type: String,
      default: 'Remove',
    },
    editLabel: {
      type: String,
      default: 'Edit',
    },
    ammount: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      inputValue: null,
    }
  },
  watch: {
    // Keep ammount synced / "computed"
    value() {
      this.inputValue = this.ammount
    },
  },
  created() {
    this.inputValue = this.ammount
  },
  computed: {
    computedClasses() {
      let base = ''
      base += `shopping__card--${this.type} `
      return base
    },
  },
}
</script>
