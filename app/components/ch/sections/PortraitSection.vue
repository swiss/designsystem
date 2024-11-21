<template>
  <section class="section section--default">
    <div class="container">
      <h2 class="section__title">Amtsvorsteherin kurz vorgestellt</h2>
      <div class="portrait">
        <picture class="portrait__image">
          <source
            srcset="https://picsum.photos/1100/600"
            media="(min-width: 800px)"
          />
          <img src="https://picsum.photos/550/300" alt="cat" />
        </picture>
        <div class="portrait__card card card--default">
          <div class="portrait__card__body">
            <h2 class="text--2xl font--bold">Maria Lupan</h2>
            <a href="javascript:void(0)" class="link link--block">
              @marialupan
            </a>
            <div>
              Sed ante ipsum, pretium vitae tempus quis, laoreet vel nibh id
              nunc ultrices, tristique metus quis, sagittis ipsum, maecenas.
            </div>
            <ul class="menu text--sm">
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Lebenslauf</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Anlässe</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Reden</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Interviews und Gastartikeln</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Autogrammkarte</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
              <li class="menu__item menu__item--border menu__item--condensed">
                <a href="javascript:void(0)" class="menu__item__flex">
                  <div>Präsidialjahr 2020</div>
                  <SvgIcon icon="ArrowRight" class="menu__item__icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
</script>
