<template>
  <div :class="computedClasses">
    <swiper
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
      <swiper-slide v-for="(slide, index) in slides" :key="`slide-${index}`">
        <Card type="default">
          <template v-slot:image>
            <picture>
              <img
                :src="slide.image.src"
                :alt="slide.image.alt"
                :height="slide.image.height"
                :width="slide.image.width"
              />
            </picture>
          </template>
          <template v-slot:title>
            <h3>{{ slide.title }}</h3>
          </template>
          <template v-slot:description>
            <p>
              {{ slide.description }}
            </p>
          </template>
          <template v-slot:footerInfo>
            {{ slide.footerInfo }}
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </swiper-slide>
    </swiper>
    <div class="carousel__fonctions">
      <div class="carousel__pagination" :id="`carousel-pagination-${id}`"></div>
      <button class="carousel__prev" :id="`carousel-prev-${id}`">
        <div class="sr-only">Previous image</div>
        <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
      </button>
      <button class="carousel__next" :id="`carousel-next-${id}`">
        <div class="sr-only">Next image</div>
        <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'
import Card from '../components/Card'
import Btn from '../components/Btn'
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    default: 1,
  },
  breakpoints: {
    type: Object,
  },
  paginationType: {
    type: String,
    validator: (prop) => ['bullets', 'fraction'].includes(prop),
    default: 'bullets',
  },
  loop: {
    type: Boolean,
    default: false,
  },
  slides: {
    type: Array,
    required: true,
  },
})

const computedClasses = computed(() => {
  let base = 'carousel carousel--cards'
  return base
})
</script>
