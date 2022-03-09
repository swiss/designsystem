<template>
  <div>
    <swiper
      :loop="loop"
      :breakpoints="breakpoints"
      :speed="500"
      :autoHeight="true"
      :keyboard="{
        enabled: true,
        onlyInViewport: false,
      }"
      :navigation="{
        nextEl: '.carousel__next',
        prevEl: '.carousel__prev'
      }"
      :simulateTouch="true"
      :slideToClickedSlide="false"
      :pagination="{
          type: paginationType,
          el: '.carousel__pagination',
          clickable: true,
          bulletElement: 'button',
          bulletClass: 'carousel__bullet',
          bulletActiveClass: 'carousel__bullet--active'
      }"
      :a11y="{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      }"
      :slides-per-view="1"
      :space-between="16"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
      >
        <div>Slide {{ n }}</div>
        <a href="www.google.ch">test</a>
        <img
          :src="getImageUrl(29+n)"
          width="600"
          :height="100+25*n"
          :alt="`image ${n}`"
          blank="true"
        >
      </swiper-slide>
    </swiper>
    <button class="carousel__next">Next image</button>
    <button class="carousel__prev">Previous image</button>
    <div class="carousel__pagination"></div>
  </div>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'


SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
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
        'fraction',
        'progressbar'
      ].includes(prop),
      default: 'bullets'
    },
  },
  methods: {
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  },
}
</script>