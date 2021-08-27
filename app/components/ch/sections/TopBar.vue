<template>
  <div
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : '' "
  >
    <div class="top-bar__bar">
      <div class="container container--flex">
        <button
          class="top-bar__btn"
          @click="isOpen = !isOpen"
        >
          <span>Alle Schweizer Bundesbehörden</span>
          <SvgIcon
            v-if="!isOpen"
            icon="ChevronDown"
            class="top-bar__btn__icon"
          />
          <SvgIcon
            v-if="isOpen"
            icon="ChevronUp"
            class="top-bar__btn__icon"
          />
        </button>
        <div class="top-bar__right">
          <TopBarNavigation context="desktop" />
          <LanguageSwitcher context="desktop" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">
        <div class="flex justify-end">
          <button
            class="top-bar__drawer__close__btn"
            @click="isOpen = !isOpen"
          >
            <span>Schliessen</span>
            <SvgIcon
              icon="Cancel"
            />
          </button>
        </div>
        <div class="top-bar__drawer__localization">
          <h3>Wo befinde ich mich?</h3>
          <div class="top-bar__drawer__localization__nav">
            <ul>
              <li>
                <a href="javascript:void(0)">UVEK</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="top-bar__drawer__localization__nav__icon"
                />
              </li>
              <li>
                <a href="javascript:void(0)">Swisstopo</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="top-bar__drawer__localization__nav__icon"
                />
              </li>
              <li>
                <a href="javascript:void(0)" class="active">Das Geoportal des Bundes</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="top-bar__drawer__agencies">
          <h3 class="pb-4">Eine andere Bundesbehörde besuchen</h3>

          <div class="grid grid-cols-3 gap-9 lg:gap-10 xl:gap-12 2xl:gap-16">
            <div class="grid sm:grid-cols-2 gap-9 lg:grid-cols-none">
              <div>
                <h4 class="p-3">Zur Bundesrat Webseite gehen</h4>
                <p>
                  Sieben Departementsvorsteherinnen und Departementsvorsteher bilden den Bundesrat.
                  Entschieden wird gemeinsam. Der Bundeskanzler unterstützt die Regierung.
                </p>
                <Btn label="Bundesrat Webseite besuchen" icon="External" icon-pos="right" type="outline-negative" size="sm" />
              </div>
              <div>
                <h4>Zur Bundeskanzlei Webseite gehen</h4>
                <p>
                  Die Bundeskanzlei ist die Stabsstelle des Bundesrats und hat die Funktion eines Scharniers zwischen Regierung,
                  Verwaltung, Parlament und Öffentlichkeit.
                </p>
                <Btn label="Bundeskanzlei Webseite besuchen" icon="External" icon-pos="right" type="outline-negative" size="sm" />
              </div>
            </div>

            <div>
              <h4>Alle Departemente</h4>
              <ul class="menu">
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDA</div>
                      <div>
                        Eidgenössisches Departement für auswärtige Angelegenheiten
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EDI</div>
                      <div>
                        Eidgenössisches Departement des Innern
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EJPD</div>
                      <div>
                        Eidgenössisches Justiz- und Polizeidepartement
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">VBS</div>
                      <div>
                        Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">EFD</div>
                      <div>
                        Eidgenössisches Finanzdepartement
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">WBF</div>
                      <div>
                        Eidgenössisches Departement für Wirtschaft, Bildung und Forschung
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
                <li class="menu__item menu__item--negative menu__item--brim">
                  <a href="javascript:void(0)" class="menu__item__flex">
                    <div>
                      <div class="overtitle">UVEK</div>
                      <div>
                        Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation
                      </div>
                    </div>
                    <SvgIcon
                      icon="External"
                      class="menu__item__icon"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Alle Ämter</h4>
              <div class="search search--negative search--large">
                  <input class="search__field" type="text" placeholder="Amt suchen">
                  <SvgIcon
                    icon="Search"
                    class="search__icon"
                  />
              </div>
              <div class="search__results search__results--negative">
                <ul class="menu">
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BK</span>
                        </div>
                        <div>
                          Bundesamt für Kultur
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BLV</span>
                        </div>
                        <div>
                          Bundesamt für Lebensmittelsicherheit und Veterinärwesen
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>UVEK</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BS</span>
                        </div>
                        <div>
                          Bundesamt für Sozialversicherungen
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BAR</span>
                        </div>
                        <div>
                          Schweizerisches Bundesarchiv
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BK</span>
                        </div>
                        <div>
                          Bundesamt für Kultur
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BAR</span>
                        </div>
                        <div>
                          Schweizerisches Bundesarchiv
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BK</span>
                        </div>
                        <div>
                          Bundesamt für Kultur
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                  <li class="menu__item menu__item--negative menu__item--icon-on-hover">
                    <a href="javascript:void(0)" class="menu__item__flex">
                      <div>
                        <div class="overtitle">
                          <span>EDA</span>
                          <SvgIcon icon="ArrowRight" class="icon--sm" />
                          <span>BK</span>
                        </div>
                        <div>
                          Bundesamt für Kultur
                        </div>
                      </div>
                      <SvgIcon
                        icon="External"
                        class="menu__item__icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Btn from "~/components/ch/components/Btn";
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

export default {
  name: 'TopBar',
  components: {
    TopBarNavigation,
    SvgIcon,
    Btn,
    LanguageSwitcher
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
}
</script>
