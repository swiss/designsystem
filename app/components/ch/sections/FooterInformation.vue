<template>
  <div class="bg--secondary-600">
    <div class="container">
      <div class="footer-information">
        <div class="footer-information__entry">
          <h3>Über uns</h3>
          <p>
            In vitae risus porttitor, imperdiet urna quis, venenatis mi. Aliquam
            mattis nibh orci, a pellentesque diam rutrum vel. In vitae risus
            porttitor, imperdiet urna quis, venenatis mi. Aliquam mattis nibh
            orci, a pellentesque diam rutrum vel.
          </p>
          <p>© Geoportal</p>
        </div>
        <div class="footer-information__entry">
          <h3>Bleiben sie informiert</h3>
          <div class="footer-information__social">
            <a class="footer__link" href="facebook.com">
              <SvgIcon icon="Facebook" class="footer-information__icon" />
              Facebook
            </a>
            <a href="x.com" class="footer__link">
              <SvgIcon icon="Twitter" class="footer-information__icon" />
              𝕏
            </a>
            <a href="youtube.com" class="footer__link">
              <SvgIcon icon="Youtube" class="footer-information__icon" />
              Youtube
            </a>
            <a href="linkedin.com" class="footer__link">
              <SvgIcon icon="LinkedIn" class="footer-information__icon" />
              LinkedIn
            </a>
            <a href="xing.com" class="footer__link">
              <SvgIcon icon="Xing" class="footer-information__icon" />
              Xing
            </a>
          </div>

          <Btn
            label="News abonnieren"
            icon="ArrowRight"
            icon-pos="right"
            variant="outline-negative"
          />
        </div>
        <div class="footer-information__entry footer-information__entry--big">
          <h3>Weitere Informationen</h3>
          <div class="footer-information__links">
            <div class="footer-information__links-column">
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Über uns
              </a>
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Jobs
              </a>
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Kontakt
              </a>
            </div>
            <div class="footer-information__links-column">
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Medien
              </a>
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Barrierefreiheit
              </a>
              <a
                href="javascript:void(0)"
                class="footer__link footer-information__link--icon-right"
              >
                <SvgIcon icon="ArrowRight" class="footer-information__icon" />
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import Btn from '../components/Btn.vue'
</script>
