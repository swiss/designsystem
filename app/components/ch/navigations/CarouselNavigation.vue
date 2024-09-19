<template>
  <nav class="carousel-navigation" :id="id">
    <ul class="carousel">
      <swiper
        :speed="500"
        :autoHeight="false"
        :loop="false"
        :spaceBetween="24"
        slidesPerView="auto"
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
      >
        <swiper-slide>
          <li>
            <a href="javascript:alert('link')">
              <span>Alle</span>
            </a>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <a href="javascript:alert('link)" class="active">
              <span>Corona</span>
            </a>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <a href="javascript:alert('link')">
              <span>Bürgerrecht</span>
            </a>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <a href="javascript:alert('link')">
              <span>Ukraine</span>
            </a>
          </li>
        </swiper-slide>
      </swiper>
      <div class="carousel__fonctions">
        <button class="carousel__prev" :id="`carousel-prev-${id}`">
          <div class="sr-only">Vorherige Navigations Elemente</div>
          <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
        </button>
        <button class="carousel__next" :id="`carousel-next-${id}`">
          <div class="sr-only">Nächste Navigations Elemente</div>
          <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
        </button>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
  id: {
    type: String,
    default: 1,
  },
})
</script>
