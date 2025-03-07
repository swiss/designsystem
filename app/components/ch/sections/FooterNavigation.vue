<template>
  <div class="footer-navigation-container">
    <nav class="container" aria-label="Footer">
      <ul class="footer-navigation">
        <li>
          <ul class="footer-navigation-links">
            <li>
              <a href="javascript:void(0)" class="footer__link">Rechtliches</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="footer__link">Datenschutz</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="footer__link">Impressum</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="footer__link">
                Barrierefreiheit
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-navigation-select">
          <Select
            class="footer--select"
            :required="false"
            size="base"
            label="Darstellung"
            :on-select="handleSelect"
          >
            <option selected value="auto">Automatisch</option>
            <option value="dark">Darkmode</option>
            <option value="light">Lightmode</option>
          </Select>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Select from '../components/Select.vue'

const handleSelect = function (e: string) {
  document.querySelector('html')?.setAttribute('data-theme', e)
}
</script>
