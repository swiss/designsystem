<template>
  <nav :id="id" class="carousel-navigation">
    <ul class="carousel">
      <Swiper
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
        <SwiperSlide>
          <li>
            <a href="javascript:alert('link')">
              <span>Alle</span>
            </a>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li>
            <a href="javascript:alert('link)" class="active">
              <span>Corona</span>
            </a>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li>
            <a href="javascript:alert('link')">
              <span>Bürgerrecht</span>
            </a>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li>
            <a href="javascript:alert('link')">
              <span>Ukraine</span>
            </a>
          </li>
        </SwiperSlide>
      </Swiper>
      <div class="carousel__fonctions">
        <button :id="`carousel-prev-${id}`" class="carousel__prev">
          <div class="sr-only">Vorherige Navigations Elemente</div>
          <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
        </button>
        <button :id="`carousel-next-${id}`" class="carousel__next">
          <div class="sr-only">Nächste Navigations Elemente</div>
          <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
        </button>
      </div>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'

defineProps({
  id: {
    type: String,
    default: () => '1',
  },
})
</script>
