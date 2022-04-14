<template>
  <div 
    :class="computedClasses"
  >
    <swiper
      :breakpoints="breakpoints"
      :speed="500"
      :autoHeight="true"
      :loop="true"
      :keyboard="{
        enabled: true,
        onlyInViewport: false,
      }"
      :navigation="{
        nextEl: `#carousel-next-${id}`,
        prevEl: `#carousel-prev-${id}`
      }"
      :simulateTouch="true"
      :slideToClickedSlide="false"
      :pagination="{
          type: paginationType,
          el: `#carousel-pagination-${id}`,
          clickable: true,
          bulletClass: 'carousel__bullet',
          bulletActiveClass: 'carousel__bullet--active'
      }"
      :slides-per-view="1"
      :space-between="16"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
      >
        <figure>
          <picture>
            <source
              :srcset="slide.source.srcset"
              :height="slide.source.height"
              :width="slide.source.width"
              :media="slide.source.media"
            />
            <img 
              :src="slide.image.src" 
              :alt="slide.image.alt" 
              :height="slide.image.height"
              :width="slide.image.width"
            />
          </picture>
          <figcaption v-if="slide.caption">
            <span v-if="slide.caption.title">{{ slide.caption.title }}</span>
            <span v-if="slide.caption.title && slide.caption.description">  —&nbsp;</span>
            <span v-if="slide.caption.description">{{ slide.caption.description }}</span>
            <span v-if="slide.caption.copyright"> —&nbsp;©&nbsp;{{ slide.caption.copyright }}</span>
          </figcaption>
        </figure>
      </swiper-slide>
    </swiper>
    <div class="carousel__fonctions">
      <div class="carousel__pagination" :id="`carousel-pagination-${id}`"></div>
      <button
        class="carousel__prev" 
        :id="`carousel-prev-${id}`"
      >
        <div class="sr-only">Previous image</div>
        <SvgIcon
          icon="ChevronLeft"
          role="presentation" 
          aria-hidden="true"
        />
      </button>
      <button 
        class="carousel__next" 
        :id="`carousel-next-${id}`"
      >
        <div class="sr-only">Next image</div>
        <SvgIcon
          icon="ChevronRight"
          role="presentation" 
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

import SvgIcon from '../components/SvgIcon.vue'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    SvgIcon
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    loop: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object
    },
    paginationType: {
      type: String,
      validator: (prop) => [
        'bullets',
        'fraction'
      ].includes(prop),
      default: 'bullets'
    },
    slides: {
      type: Array,
      required: true
    }
  },

  computed: {
    computedClasses () {
      let base = 'carousel '
      if (this.paginationType) base += `carousel--${this.paginationType} `
      return base
    },
  }
}
</script>