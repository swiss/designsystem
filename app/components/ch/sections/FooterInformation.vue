<template>
  <div class="bg--secondary-600">
    <div class="container">
      <ul class="footer-information">
        <li class="footer-information__entry">
          <h3>Über uns</h3>
          <p>
            In vitae risus porttitor, imperdiet urna quis, venenatis mi. Aliquam
            mattis nibh orci, a pellentesque diam rutrum vel. In vitae risus
            porttitor, imperdiet urna quis, venenatis mi. Aliquam mattis nibh orci,
            a pellentesque diam rutrum vel.
          </p>
          <p>
            © Geoportal
          </p>
        </li>
        <li class="footer-information__entry">
          <h3>Bleiben sie informiert</h3>
          <div class="footer-information__social">
            <a class="footer__link" href="facebook.com">
              <SvgIcon icon="Facebook" class="footer-information__icon" />
              Facebook
            </a>
            <a href="twitter.com" class="footer__link">
              <SvgIcon icon="Twitter" class="footer-information__icon" />
              Twitter
            </a>
            <a href="youtube.com" class="footer__link">
              <SvgIcon icon="Youtube" class="footer-information__icon" />
              Youtube
            </a>
          </div>

          <Btn label="Newsletter abonnieren" icon="External" icon-pos="right" variant="outline-negative" />

        </li>
        <li class="footer-information__entry footer-information__entry--big">
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import Btn from '../components/Btn.vue'

export default {
  components: {
    SvgIcon,
    Btn
  },
}
</script>
