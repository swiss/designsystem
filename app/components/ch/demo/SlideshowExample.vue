<template>
  <div :class="computedClasses">
    <Swiper
      :breakpoints="breakpoints"
      :speed="500"
      :autoHeight="false"
      :loop="loop"
      :keyboard="{
        enabled: true,
        onlyInViewport: false,
      }"
      :modules="[Navigation, Pagination, A11y]"
      :navigation="{
        nextEl: `#carousel-next-${id}`,
        prevEl: `#carousel-prev-${id}`,
      }"
      :simulateTouch="true"
      :slideToClickedSlide="false"
      :pagination="{
        type: paginationType,
        el: `#carousel-pagination-${id}`,
        clickable: true,
        bulletClass: 'carousel__bullet',
        bulletActiveClass: 'carousel__bullet--active',
      }"
      :slides-per-view="1"
      :space-between="16"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="`slide-${index}`">
        <figure>
          <picture>
            <img
              :src="slide.image.src"
              :alt="slide.image.alt"
              :height="slide.image.height"
              :width="slide.image.width"
            />
          </picture>
          <figcaption v-if="slide.caption">
            <span v-if="slide.caption.title">{{ slide.caption.title }}</span>
            <span v-if="slide.caption.title && slide.caption.description">
              —&nbsp;</span
            >
            <span v-if="slide.caption.description">{{
              slide.caption.description
            }}</span>
            <span v-if="slide.caption.copyright">
              —&nbsp;©&nbsp;{{ slide.caption.copyright }}</span
            >
          </figcaption>
        </figure>
      </SwiperSlide>
    </Swiper>
    <div class="carousel__fonctions">
      <div :id="`carousel-pagination-${id}`" class="carousel__pagination" />
      <button :id="`carousel-prev-${id}`" class="carousel__prev">
        <div class="sr-only">Previous image</div>
        <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
      </button>
      <button :id="`carousel-next-${id}`" class="carousel__next">
        <div class="sr-only">Next image</div>
        <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'
import { computed, type PropType } from 'vue'
import type { SwiperOptions } from 'swiper/types'
import type { SlideshowSlide } from '../../../types'

const props = defineProps({
  id: {
    type: Number,
    default: () => 1,
  },
  loop: {
    type: Boolean,
    default: () => true,
  },
  breakpoints: {
    type: Object as PropType<SwiperOptions['breakpoints']>,
    default: () => undefined,
  },
  paginationType: {
    type: String as PropType<'bullets' | 'fraction'>,
    validator: (prop) => ['bullets', 'fraction'].includes(prop as string),
    default: () => 'bullets',
  },
  slides: {
    type: Array<SlideshowSlide>,
    required: true,
  },
})

const computedClasses = computed(() => {
  let base = 'carousel '
  if (props.paginationType) base += `carousel--${props.paginationType} `
  return base
})
</script>
