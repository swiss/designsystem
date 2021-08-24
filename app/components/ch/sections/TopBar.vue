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
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">
        <div class="top-bar__drawer__close">
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
          <h3>Eine andere Bundesbehörde besuchen</h3>

          <ul class="top-bar__drawer__agencies__information">
            <li class="top-bar__drawer__agencies__information__entry entry__websites">
              <div class="entry__website">
                <h4>Zur Bundesrat Webseite gehen</h4>
                <p>
                  Sieben Departementsvorsteherinnen und Departementsvorsteher bilden den Bundesrat.
                  Entschieden wird gemeinsam. Der Bundeskanzler unterstützt die Regierung.
                </p>
                <Btn label="Bundesrat Webseite besuchen" icon="External" icon-pos="right" type="outline-negative" size="sm" />
              </div>
              <div class="entry__website">
                <h4>Zur Bundeskanzlei Webseite gehen</h4>
                <p>
                  Die Bundeskanzlei ist die Stabsstelle des Bundesrats und hat die Funktion eines Scharniers zwischen Regierung,
                  Verwaltung, Parlament und Öffentlichkeit.
                </p>
                <Btn label="Bundeskanzlei Webseite besuchen" icon="External" icon-pos="right" type="outline-negative" size="sm" />
              </div>
            </li>
            <li class="top-bar__drawer__agencies__information__entry">
              <div class="entry__departments">
                <h4>Alle Departemente</h4>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">EDA</span>
                    <p>Eidgenössisches Departement für auswärtige Angelegenheiten</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">EDI</span>
                    <p>Eidgenössisches Departement des Innern</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">EJPD</span>
                    <p>Eidgenössisches Justiz- und Polizeidepartement</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">VBS</span>
                    <p>Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">EFD</span>
                    <p>Eidgenössisches Finanzdepartement</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">WBF</span>
                    <p>Eidgenössisches Departement für Wirtschaft, Bildung und Forschung</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
                <div class="entry__department">
                  <div class="entry__department__info">
                    <span class="entry__department__acronym">UVEK</span>
                    <p>Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation</p>
                  </div>
                  <a href="javascript:void(0)">
                    <SvgIcon
                      icon="External"
                      class="entry__department__icon"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li class="top-bar__drawer__agencies__information__entry">
              <div class="entry__amt">
                <h4>Alle Ämter</h4>
                <div class="entry__amt__content">
                  <div class="entry__amt__search">
                      <input class="search__field" type="text" placeholder="Amt suchen">
                      <SvgIcon
                        icon="Search"
                        class="search__icon"
                      />
                  </div>
                  <div class="entry__amt__list">
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          EDA
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BK
                        </div>
                        <p>Bundesamt für Kultur</p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          EDA
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BLV
                        </div>
                        <p>Bundesamt für Lebensmittelsicherheit und Veterinärwesen</p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          UVEK
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BS
                        </div>
                        <p>Bundesamt für Sozialversicherungen </p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          EDA
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BAR
                        </div>
                        <p>Schweizerisches Bundesarchiv</p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          EDA
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BK
                        </div>
                        <p>Bundesamt für Kultur</p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>
                    <div class="entry__amt__list__item">
                      <div class="entry__amt__info">
                        <div class="entry__amt__accronym">
                          EDA
                          <SvgIcon
                            icon="ArrowRight"
                            class="entry__amt__accronym__icon"
                          />
                          BK
                        </div>
                        <p>Bundesamt für Kultur</p>
                      </div>
                      <a href="javascript:void(0)">
                        <SvgIcon
                          icon="External"
                          class="entry__amt__list__icon"
                        />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Btn from "~/components/ch/components/Btn";

export default {
  name: 'TopBar',
  components: {
    TopBarNavigation,
    SvgIcon,
    Btn
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    }
  },
}
</script>
