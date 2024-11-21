<template>
  <div :id="id" class="carousel-badge-filter">
    <div class="carousel">
      <Swiper
        :speed="500"
        :autoHeight="false"
        :loop="false"
        :spaceBetween="10"
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
          <Badge
            label="Alle"
            size="base"
            :color="activeFilter === 'all' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('all')"
            :disabled="disabledFilters.includes('all')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="0-9"
            size="base"
            :color="activeFilter === 'numeric' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('numeric')"
            :disabled="disabledFilters.includes('numeric')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="A"
            size="base"
            :color="activeFilter === 'a' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('a')"
            :disabled="disabledFilters.includes('a')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="B"
            size="base"
            :color="activeFilter === 'b' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('b')"
            :disabled="disabledFilters.includes('b')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="C"
            size="base"
            :color="activeFilter === 'c' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('c')"
            :disabled="disabledFilters.includes('c')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="D"
            size="base"
            :color="activeFilter === 'd' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('d')"
            :disabled="disabledFilters.includes('d')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="E"
            size="base"
            :color="activeFilter === 'e' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('e')"
            :disabled="disabledFilters.includes('e')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="F"
            size="base"
            :color="activeFilter === 'f' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('f')"
            :disabled="disabledFilters.includes('f')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="G"
            size="base"
            :color="activeFilter === 'g' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('g')"
            :disabled="disabledFilters.includes('g')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="H"
            size="base"
            :color="activeFilter === 'h' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('h')"
            :disabled="disabledFilters.includes('h')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="I"
            size="base"
            :color="activeFilter === 'i' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('i')"
            :disabled="disabledFilters.includes('i')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="J"
            size="base"
            :color="activeFilter === 'j' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('j')"
            :disabled="disabledFilters.includes('j')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="K"
            size="base"
            :color="activeFilter === 'k' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('k')"
            :disabled="disabledFilters.includes('k')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="L"
            size="base"
            :color="activeFilter === 'l' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('l')"
            :disabled="disabledFilters.includes('l')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="M"
            size="base"
            :color="activeFilter === 'm' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('m')"
            :disabled="disabledFilters.includes('m')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="N"
            size="base"
            :color="activeFilter === 'n' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('n')"
            :disabled="disabledFilters.includes('n')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="O"
            size="base"
            :color="activeFilter === 'o' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('o')"
            :disabled="disabledFilters.includes('o')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="P"
            size="base"
            :color="activeFilter === 'p' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('p')"
            :disabled="disabledFilters.includes('p')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="Q"
            size="base"
            :color="activeFilter === 'q' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('q')"
            :disabled="disabledFilters.includes('q')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="R"
            size="base"
            :color="activeFilter === 'r' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('r')"
            :disabled="disabledFilters.includes('r')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="S"
            size="base"
            :color="activeFilter === 's' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('s')"
            :disabled="disabledFilters.includes('s')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="T"
            size="base"
            :color="activeFilter === 't' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('t')"
            :disabled="disabledFilters.includes('t')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="U"
            size="base"
            :color="activeFilter === 'u' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('u')"
            :disabled="disabledFilters.includes('u')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="V"
            size="base"
            :color="activeFilter === 'v' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('v')"
            :disabled="disabledFilters.includes('v')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="W"
            size="base"
            :color="activeFilter === 'w' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('w')"
            :disabled="disabledFilters.includes('w')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="X"
            size="base"
            :color="activeFilter === 'x' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('x')"
            :disabled="disabledFilters.includes('x')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="Y"
            size="base"
            :color="activeFilter === 'y' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('y')"
            :disabled="disabledFilters.includes('y')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            label="Z"
            size="base"
            :color="activeFilter === 'z' ? 'negative' : 'gray'"
            clickable
            :badgeClicked="() => badgeClicked('z')"
            :disabled="disabledFilters.includes('z')"
          />
        </SwiperSlide>
      </Swiper>
      <div class="carousel__fonctions">
        <button :id="`carousel-prev-${id}`" class="carousel__prev">
          <div class="sr-only">Vorheriger Filter</div>
          <SvgIcon icon="ChevronLeft" role="presentation" aria-hidden="true" />
        </button>
        <button :id="`carousel-next-${id}`" class="carousel__next">
          <div class="sr-only">Nächster Filter</div>
          <SvgIcon icon="ChevronRight" role="presentation" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Badge from '../components/Badge.vue'
import SvgIcon from '../components/SvgIcon.vue'

defineProps({
  id: {
    type: String,
    default: () => '1',
  },
  badgeClicked: {
    type: Function,
    default: () => {},
  },
  activeFilter: {
    type: String,
    default: () => 'all',
  },
  disabledFilters: {
    type: Array,
    default: () => [],
  },
})
</script>
