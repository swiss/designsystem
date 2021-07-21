<template>
  <ul class="footer-information">
    <li class="footer-information__entry">
      <h3>Über uns</h3>
      <p>
        In vitae risus porttitor, imperdiet urna quis, venenatis mi. Aliquam
        mattis nibh orci, a pellentesque diam rutrum vel. In vitae risus
        porttitor, imperdiet urna quis, venenatis mi. Aliquam mattis nibh orci,
        a pellentesque diam rutrum vel.
      </p>
    </li>
    <li class="footer-information__entry">
      <h3>Bleiben sie informiert</h3>
      <div class="footer-information__social">
        <a class="footer__link" href="facebook.com">
          <svg-icon icon="Facebook" class="footer-information__icon" />
          Facebook
        </a>
        <a href="twitter.com" class="footer__link">
          <svg-icon icon="Twitter" class="footer-information__icon" />
          Twitter
        </a>
        <a href="youtube.com" class="footer__link">
          <svg-icon icon="Youtube" class="footer-information__icon" />
          Youtube
        </a>
      </div>
      <button class="btn btn--outline-negative btn--lg btn--icon-right">
        <svg-icon icon="ArrowRight" class="btn__icon" />
        Newsletter abonnieren
      </button>
    </li>
    <li class="footer-information__entry footer-information__entry--big">
      <h3>Weitere Informationen</h3>
      <div class="footer-information__links">
        <div class="footer-information__links-column">
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            Über uns
          </a>
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            Jobs
          </a>
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            Kontakt
          </a>
        </div>
        <div class="footer-information__links-column">
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            Medien
          </a>
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            ...
          </a>
          <a
            href="javascript:void(0)"
            class="footer__link footer-information__link--icon-right"
          >
            <svg-icon icon="ArrowRight" class="footer-information__icon" />
            ...
          </a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'

export default {
  components: {
    SvgIcon,
  },
}
</script>
