<template>
  <div :class="computedClasses">
    <Swiper
      :speed="500"
      :autoHeight="false"
      :loop="loop"
      :slidesPerView="1"
      :spaceBetween="20"
      :slidesPerGroup="1"
      :breakpoints="{
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 28,
        },
        640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 36,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 36,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 48,
        },
        1800: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 64,
        },
      }"
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
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="`slide-${index}`">
        <Card type="default">
          <template #image>
            <picture>
              <img
                :src="slide.image.src"
                :alt="slide.image.alt"
                :height="slide.image.height"
                :width="slide.image.width"
              />
            </picture>
          </template>
          <template #title>
            <h3>{{ slide.title }}</h3>
          </template>
          <template #description>
            <p>
              {{ slide.description }}
            </p>
          </template>
          <template #footerInfo>
            {{ slide.footerInfo }}
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
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
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import { computed, type PropType } from 'vue'
import type { PaginationOptions } from 'swiper/types'
import type { SlideshowSlide } from '../../../types'

defineProps({
  id: {
    type: Number,
    default: () => 1,
  },
  breakpoints: {
    type: Object,
    default: () => undefined,
  },
  paginationType: {
    type: String as PropType<PaginationOptions['type']>,
    validator: (prop) => ['bullets', 'fraction'].includes(prop as string),
    default: () => 'bullets',
  },
  loop: {
    type: Boolean,
    default: () => false,
  },
  slides: {
    type: Array as PropType<SlideshowSlide[]>,
    required: true,
  },
})

const computedClasses = computed(() => {
  const base = 'carousel carousel--cards'
  return base
})
</script>
