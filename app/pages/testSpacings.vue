<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb />
      <div class="container">
        <ShareBar />
      </div>
    </header>
    <main id="main-content">
      <div>
        <section id="" identifier="lead-contentpage" class="hero hero--default">
          <div class="container container--grid gap--responsive">
            <div class="hero__content container__center--md">
              <h1 class="hero__title h1">
                Hochwasser im Juli 2021: 0.25 Mio Besuche auf dem Kartenviewer
                des Bundes-Geoportals - ein Rekordwert
              </h1>
              <p class="hero__description">
                Die intensiven und teils gewittrigen Niederschläge im Monat Juli
                führten an vielen Orten in der Schweiz zu Unwettern, Hochwasser
                an Flüssen und Überschwemmungen an Seen. Gleichzeitig zeigen die
                Statistiken eine erhöhte Aktivität auf map.geo.admin.ch -
                infolge der Unwetterereignisse erreichte der Kartenviewer des
                Bundes einen Allzeit Rekord an «Visits»-Zahlen mit einer
                Viertelmillion Besuche an einem einzigen Tag.
              </p>
              <!---->
            </div>
            <div class="hero__image container__center--md">
              <div>
                <figure>
                  <picture>
                    <img
                      alt="News - Inondations Juillet 2021 - Visites map.geo.admin.ch"
                      src="https://livingdocs-ch-ch-prod.imgix.net/2021/11/30/b70ac970-1bb4-480e-af71-c1ed6ca4f246.png"
                  /></picture>
                  <figcaption />
                </figure>
                <div />
              </div>
            </div>
          </div>
        </section>
        <section
          id="doc-section"
          identifier="section"
          class="section section--default"
        >
          <div
            id="doc-container-grid"
            identifier="container-grid"
            class="container container--grid gap--responsive"
          >
            <div class="container__center--xs vertical-spacing">
              <p id="doc-1flo6kaen0" identifier="p">
                Der Monat Juli war in seiner ersten Hälfte nass und das Wetter
                instabil wie bereits im Juni. Ab dem 12. Juli 2021 folgte erneut
                kräftiger Regen, ausgelöst durch das Tiefdruckgebiet Bernd,
                welches Hochwasser an Flüssen und Überschwemmung an Seen zufolge
                hatte.
              </p>
              <p id="doc-1g3oarrh80" identifier="p">
                Beispiel für einen langeren Link:<br /><a
                  href="https://wms.geo.admin.ch"
                  target="_blank"
                  class="link--external"
                  >https://wms.geo.admin.ch/?SERVICE=WMS&amp;REQUEST=GetMap&amp;VERSION=1.3.0&amp;LAYERS=ch.bafu.bundesinventare-bln&amp;STYLES=default&amp;CRS=EPSG:2056&amp;BBOX=2550000,1060000,2660000,1140000&amp;WIDTH=800&amp;HEIGHT=582&amp;FORMAT=image/png</a
                >
              </p>
              <p id="doc-1flo6kihj0" identifier="p">
                Der Bedarf an Informationen über mögliche Gefahren und aktuelle
                Warnungen war entsprechend gross. Während der Unwetterereignisse
                wurde folglich eine erstaunlich hohe Besucherzahl auf
                www.map.geo.admin.ch verzeichnet. Am 16.07.2021 erreichte die
                Zahl der «Visits» auf map.geo.admin.ch schliesslich den
                Rekordwert von rund 250'000 Besuchen.
              </p>
              <p id="doc-1flo6kihk0" identifier="p">
                Link zu Geodatensätzen im Bereich Niederschlag /
                Hochwasser(gefahr):
              </p>
              <p id="doc-1flo6kihm0" identifier="p">
                <a
                  href="https://s.geo.admin.ch/91ef58c0c3"
                  target="_blank"
                  class="link"
                  >https://s.geo.admin.ch/91ef58c0c3</a
                >
              </p>
              <p id="doc-1flo6kihn0" identifier="p">
                Durch die zeitgerechte Erhebung und Bereitstellung von Geodaten
                für die Ereignisbewältigung und –dokumentation - im konkreten
                Fall im Bereich Niederschlag und Hochwasser - konnten Besucher
                auf viele hilfreiche Echtzeit-Datensätze zugreifen.
              </p>
              <p id="doc-1flo6kihn1" identifier="p">
                Folgende Bundes-Webseiten nutzten iframes (dynamische
                Integration) von map.geo.admin.ch, um weitere aktuelle
                Informationen und Messwerte zur Situation zu zeigen:
              </p>
              <div id="doc-1flo6kmaf0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://www.hydrodaten.admin.ch/fr"
                        target="_blank"
                        class="link"
                        >www.hydrodaten.admin.ch</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://www.meteoschweiz.admin.ch/home/messwerte.html"
                        target="_blank"
                        >www.meteoschweiz.admin.ch/home/messwerte.html
                      </a></span
                    >
                  </li>
                </ul>
              </div>
              <p id="doc-1flo6l7m00" identifier="p">
                Mehr Datensätze zum Thema Niederschlag/Wind, sowie
                Abflüsse/Wasserstand/Hochwassergefahr:
              </p>
              <p id="doc-1flo6lam10" identifier="p">METEOSCHWEIZ</p>
              <div id="doc-1flo6li5j0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f3426ce2"
                        target="_blank"
                        class="link"
                        >Niederschlagsummen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f342c08b"
                        target="_blank"
                        class="link"
                        >Windgeschwindigkeit
                      </a></span
                    >
                  </li>
                </ul>
              </div>
              <p id="doc-1flo6lvv30" identifier="p">BAFU</p>
              <div id="doc-1flo6m5ib0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f33d9c51"
                        target="_blank"
                        >Warnkarte Nationale Gewässer </a
                      >/
                      <a
                        href="https://s.geo.admin.ch/654a699a56"
                        target="_blank"
                        >Fliessgewässer</a
                      >
                      /
                      <a
                        href="https://s.geo.admin.ch/65bca53013"
                        target="_blank"
                        >Gefahrenstufen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/65319a667b"
                        target="_blank"
                        class="link"
                        >Abflüsse und Wasserstände</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/6536df0550"
                        target="_blank"
                        class="link"
                        >Hydrologische Stationen mit Vorhersagen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f340d80f"
                        target="_blank"
                        class="link"
                        >Gefährdungskarte Oberflächenabfluss
                      </a></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span>
                      <a
                        href="https://s.geo.admin.ch/91f34152d2"
                        target="_blank"
                        >Überschwemmungsgebiete Aquaprotect 50-100</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f341a9f0"
                        target="_blank"
                        class="link"
                        >Murgang Silvaprotect</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f341feec"
                        target="_blank"
                        class="link"
                        >Hangmuren Silvaprotect</a
                      ></span
                    >
                  </li>
                </ul>
              </div>

              <h2 id="doc-1fkmvhnki0" identifier="subtitle" class="h2">
                Einführung
              </h2>
              <p id="doc-1fkmvic0h0" identifier="p">
                Das GeoIG (SR 510.62) und die zugehörigen
                Ausführungsverordnungen gelten insbesondere für Geobasisdaten
                des Bundesrechts. Damit bildet der Begriff der Geobasisdaten des
                Bundesrechts ein zentrales Element des neuen
                Geoinformationsrechts. Die Abgrenzung der Geobasisdaten des
                Bundesrechts von den übrigen Geodaten erfolgt über den
                Rechtsbezug. Eine Zusammenstellung der Geobasisdaten des
                Bundesrechts ist im Geobasisdatenkatalog (Anhang 1 GeoIV, SR
                510.620) enthalten, der die rechtliche Sicht auf die
                Geobasisdaten des Bundesrechts widerspiegelt. Die konkrete
                Umsetzung des Harmonisierungsauftrags des GeoIG und seiner
                Ausführungsverordnungen findet jedoch nicht auf der Ebene der
                juristisch bedingten Einträge im Geobasisdatenkatalog, sondern
                auf der Ebene der durch diese Einträge betroffenen konkreten
                physischen Geobasisdatensätze statt. Diese physischen
                Geobasisdatensätze sind als Sammlung der Geobasisdatensätze des
                Bundesrechts im Zeitplan für die Einführung der «Minimalen
                Geodatenmodelle» enthalten die als Weisung für die Bundesstellen
                vom Koordinationsorgan für Geoinformation des Bundes (GKG) am
                26. August 2009 erlassen worden ist.
              </p>
              <h3 id="doc-1fkmvjl8n0" identifier="sectiontitle" class="h3">
                Inhaltliche Aspekte
              </h3>
              <ul id="doc-1fkn0ad130" identifier="faq-teaser" class="accordion">
                <li class="accordion__item">
                  <button aria-controls="0" class="accordion__button">
                    <h3 class="accordion__title">Was sind Geodaten?</h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="0"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkmvmrgr1" identifier="p">
                          Geodaten sind gemäss Art. 3 Abs. 1 Bst. a GeoIG (SR
                          510.62): „raumbezogene Daten, die mit einem bestimmten
                          Zeitbezug die Ausdehnung und Eigenschaften bestimmter
                          Räume und Objekte beschreiben, insbesondere deren
                          Lage, Beschaffenheit, Nutzung und
                          Rechtsverhältnisse.<br />“In der Botschaft zum
                          Bundesgesetz über Geoinformation, Kap. 2.1.2 (BBl 2006
                          7817) wird dazu ausgeführt: „Geodaten sind Daten mit
                          Raumbezug. Der Raumbezug wird durch Koordinaten,
                          Ortsnamen, Postadressen oder andere Kriterien
                          festgelegt. Unter Geodaten werden im vorliegenden
                          Gesetz digitale (computerlesbare Geodatensätze) sowie
                          analoge (z.B. konventionelle Karten und Pläne,
                          Ortsverzeichnisse, Listen) Daten verstanden. Immer
                          mehr Geodaten werden mit Hilfe von so genannten
                          Geoinformationssystemen (GIS) digital verwaltet,
                          gespeichert, analysiert, visualisiert und vertrieben,
                          weil die digitale Form zahlreiche unbestrittene
                          Vorteile aufweist: Investitionsschutz (weil die Daten
                          nicht durch Alterung zerstört werden), eine um ein
                          Vielfaches effizientere Nachführung (weil die
                          digitalen Daten viel weniger schwerfällig sind) und
                          einfachere Nutzungsmöglichkeiten (weil digitale Daten
                          mit wenig Aufwand kopierbar, kombinierbar, statistisch
                          auswertbar und in Dokumente integrierbar sind). Wo
                          Geodaten noch in analoger Form vorliegen, werden sie
                          zwangsläufig in die digitale, elektronisch
                          verarbeitbare Form überführt, weil dies notwendig und
                          wirtschaftlicher ist.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="1" class="accordion__button">
                    <h3 class="accordion__title">Was sind Geoinformationen?</h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="1"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkmvoh6j1" identifier="p">
                          Geoinformationen sind gemäss Art. 3 Abs. 1 Bst. b
                          GeoIG (SR 510.62): «raumbezogene Informationen, die
                          durch die Verknüpfung von Geodaten gewonnen werden.»
                          In der Botschaft zum Bundesgesetz über Geoinformation,
                          Kap. 2.1.2 (BBl 2006 7817) wird dazu ausgeführt:
                          „Geoinformationen lassen sich aus Geodaten durch die
                          Anwendung von Regeln und Anweisungen gewinnen. Aus
                          einer bestimmten Fragestellung werden durch die
                          Verknüpfung von Geodaten Zusammenhänge, Zuordnungen
                          und Abhängigkeiten erkennbar.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="2" class="accordion__button">
                    <h3 class="accordion__title">Was sind Geobasisdaten?</h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="2"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkmvppr41" identifier="p">
                          Geobasisdaten sind gemäss Art. 3 Abs. 1 Bst. c GeoIG
                          (SR 510.62): «Geodaten, die auf einem rechtsetzenden
                          Erlass des Bundes, eines Kantons oder einer Gemeinde
                          beruhen.» In der Botschaft zum Bundesgesetz über
                          Geoinformation, Kap. 2.1.2 (BBl 2006 7817) wird dazu
                          ausgeführt: „Die Abgrenzung der Geobasisdaten von den
                          übrigen Geodaten erfolgt über den Rechtsbezug. Der
                          betreffende Datensatz muss sich auf einen Rechtserlass
                          des Bundes, eines Kantons oder einer Gemeinde
                          abstützen, d.h. es muss ein sachlich plausibler Bezug
                          von einem spezifischen Datensatz zu einem Rechtserlass
                          (Gesetz, Verordnung) hergestellt werden können. Oft
                          ist dieser Bezug in den geltenden Rechtserlassen nur
                          implizit vorhanden, weil sie nur den groben
                          Aufgabenbereich beschreiben, dem einzelne
                          Geobasisdatensätze zugeordnet werden können. In diesen
                          Fällen ist aber das Erfassen, Nachführen und Verwalten
                          der betreffenden Geodaten für die Aufgabenerfüllung
                          zwingend erforderlich.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="3" class="accordion__button">
                    <h3 class="accordion__title">
                      Was sind Geobasisdaten des Bundesrechts?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="3"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkmvr72e1" identifier="p">
                          In der Botschaft zum Bundesgesetz über Geoinformation,
                          Kap. 2.1.2 (BBl 2006 7817) wird dazu ausgeführt:
                          „Geobasisdaten des Bundesrechts basieren auf der
                          Bundesgesetzgebung; die Datenherrschaft liegt auf
                          Bundes-, kantonaler oder kommunaler Ebene. Das
                          Geoinformationsgesetz ist grundsätzlich anwendbar auf
                          Geobasisdaten des Bundesrechts. Diese werden auf
                          Verordnungsstufe im Geobasisdatenkatalog abschliessend
                          aufgezählt.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="4" class="accordion__button">
                    <h3 class="accordion__title">
                      Was wird unter dem Geobasisdatenkatalog (GBDK) verstanden
                      und wie lese ich ihn?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="4"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkmvsrhb1" identifier="p">
                          Art. 5 Abs. 1 GeoIG (SR 510.62): «Der Bundesrat legt
                          in einem Katalog die Geobasisdaten des Bundesrechts
                          fest.» <br />Art. 1 Abs. 2 GeoIV (SR 510.620): «Der
                          Anhang 1 enthält den Katalog der Geobasisdaten.»
                          <br />In der Botschaft zum Bundesgesetz über
                          Geoinformation, Kap. 2.2.1 (BBl 2006 7817) wird dazu
                          ausgeführt: „Der Katalog der Geobasisdaten des
                          Bundesrechts (Geobasisdatenkatalog des Bundesrechts)
                          dient dazu, den Geltungsbereich des
                          Geoinformationsgesetzes zu konkretisieren. Der
                          Geobasisdatenkatalog wird auf Verordnungsstufe
                          festgelegt und ist ein wichtiger Bestandteil des
                          künftigen Geoinformationsrechts. Der Inhalt des
                          Geobasisdatenkataloges wird durch die
                          Fachgesetzgebungen auf Bundesstufe bestimmt. Er ist
                          eindeutig durch seinen klaren Bezug zur entsprechenden
                          Fachgesetzgebung. Er ist vollständig, weil sich aus
                          Artikel 3 Absatz 1c GeoIG ableitet, dass alle
                          Geodaten, deren Existenz sich auf Bundesrecht
                          abstützen lassen, Bestandteil des
                          Geobasisdatenkataloges des Bundesrechts sein müssen.
                          Folgerichtig finden alle Bestimmungen des GeoIG
                          Anwendung auf die Geobasisdaten des Bundesrechts,
                          welche im Geobasisdatenkatalog zusammengestellt sind.
                          Hinsichtlich der Einträge (Entstehung, Mutation oder
                          Löschung von Geobasisdaten) setzt der
                          Geobasisdatenkatalog des Bundesrechts also selber kein
                          Recht. Hingegen kann er für jeden Eintrag über
                          einzelne Attribute (z.B. Veröffentlichung, ÖREB) Recht
                          setzen.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="5" class="accordion__button">
                    <h3 class="accordion__title">
                      Was wird unter «Sammlung der Geobasisdatensätze des
                      Bundesrechts» verstanden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="5"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn022re1" identifier="p">
                          Als Konkretisierung des Geobasisdatenkatalogs ist eine
                          technische Ergänzung abgeleitet worden. Diese enthält
                          zu jedem Eintrag des juristischen Katalogs alle
                          entsprechenden physisch vorhandenen bzw. in
                          Erarbeitung stehenden Geobasisdatensätze und wird als
                          «Sammlung der Geobasisdatensätze des Bundesrechts»
                          bezeichnet. Die beiden Kataloge sind über einen
                          eindeutigen Identifikator miteinander verknüpft. Die
                          Umsetzung der technischen und qualitativen
                          Harmonisierungsanforderungen an die Geobasisdaten und
                          die Harmonisierungsanforderungen von Zugang und
                          Nutzung durch das GeoIG (SR 510.62) und seine
                          Ausführungsverordnungen muss für alle Einträge in
                          dieser «Sammlung der Geobasisdatensätze des
                          Bundesrechts» umgesetzt werden. Diese Sammlung der
                          Geobasisdatensätze des Bundesrechts bildet einen
                          integralen Bestandteil des Zeitplans für die
                          Einführung der «Minimalen Geodatenmodelle», die als
                          Weisung für die Bundesstellen vom Koordinationsorgan
                          für Geoinformation des Bundes (GKG) am 26. August 2009
                          erlassen worden ist.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="6" class="accordion__button">
                    <h3 class="accordion__title">
                      Wie kommen die Bezeichnungen der Datensätze im Katalog und
                      in der Sammlung zustande bzw. welche Datensätze aus der
                      täglichen Vollzugspraxis sind gemeint?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="6"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn056m51" identifier="p">
                          Die Bezeichnungen der Datensätze im Katalog der
                          Geobasisdaten des Bundesrechts (Anhang 1 GeoIV, SR
                          510.620) sind nicht immer sprechend. Sie sind aber den
                          in der Spalte Rechtsgrundlagen aufgeführten Gesetzen
                          und Verordnungen entnommen. Die Bezeichnungen in der
                          Sammlung der Geobasisdatensätze des Bundesrechts für
                          Datensätze in der Zuständigkeit der Fachstellen des
                          Bundes werden von diesen Fachstellen vorgegeben.
                          Diejenigen Datensätze in Zuständigkeit der Kantone
                          sollen unter Federführung der jeweiligen Fachstelle
                          des Bundes zusammen mit den entsprechenden kantonalen
                          Stellen bestimmt werden. Damit soll in beiden Fällen
                          sichergestellt werden, dass in der Sammlung nur
                          Bezeichnungen von physischen Datensätzen aus der
                          täglichen Vollzugspraxis enthalten sind.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="7" class="accordion__button">
                    <h3 class="accordion__title">
                      Können physische Datensätze aus der täglichen
                      Vollzugspraxis in der Sammlung der Geobasisdatensätze
                      mehreren Einträgen im Geobasisdatenkatalog zugeordnet
                      werden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="7"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn08kpu1" identifier="p">
                          Grundsätzlich nein. Es ist allerdings zu beachten,
                          dass z.B. die Erstellung eines minimalen
                          Geodatenmodells die Objekte aus mehr als einem
                          physischen Datensatz berücksichtigen kann.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h3 id="doc-1fkmvjvff0" identifier="sectiontitle" class="h3">
                Organisatorische Aspekte
              </h3>
              <ul id="doc-1fkn5gntd0" identifier="faq-teaser" class="accordion">
                <li class="accordion__item">
                  <button aria-controls="0" class="accordion__button">
                    <h3 class="accordion__title">
                      Was wird im Umfeld GeoIG/GeoIV unter «Datenherrschaft»
                      bzw. «Zuständigkeit» verstanden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="0"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5d3q61" identifier="p">
                          Die Begriffe «Datenherrschaft» bzw. «Datenherr» kommen
                          im GeoIG nicht vor, sondern es werden immer die
                          Bezeichnungen «Zuständigkeit» bzw. «Zuständige Stelle»
                          verwendet. Gemäss Art. 8 Abs. 1 GeoIG (SR 510.62):
                          «Die Gesetzgebung bezeichnet die Stellen, die für das
                          Erheben, Nachführen und Verwalten von Geobasisdaten
                          zuständig sind. Fehlen entsprechende Vorschriften, so
                          liegt die Zuständigkeit bei der Fachstelle des Bundes
                          oder des Kantons, die für den Sachbereich zuständig
                          ist, auf den sich die Geobasisdaten beziehen.» In der
                          Botschaft zum Bundesgesetz über Geoinformation, Kap.
                          2.1.2 (BBl 2006 7817) wird dazu ausgeführt: „Im
                          Hinblick auf die rechtliche Grundlage gibt es folgende
                          Ausprägungen von Geobasisdaten:
                        </p>
                        <div id="doc-1fkn5dhru0" identifier="list">
                          <!---->
                          <!---->
                          <ul class="list list--default">
                            <li>
                              <!---->
                              <span
                                >Geobasisdaten des Bundesrechts basieren auf der
                                Bundesgesetzgebung; die Datenherrschaft liegt
                                auf Bundes-, kantonaler oder kommunaler Ebene.
                              </span>
                            </li>
                            <li>
                              <!---->
                              <span
                                >Geobasisdaten des kantonalen Rechts basieren
                                auf einem kantonalen Rechtserlass oder auf
                                interkantonalem Recht; die Datenherrschaft liegt
                                auf kantonaler oder kommunaler Ebene.
                              </span>
                            </li>
                            <li>
                              <!---->
                              <span
                                >Geobasisdaten des kommunalen Rechts basieren
                                auf einem kommunalen Rechtserlass; die
                                Datenherrschaft liegt auf kommunaler
                                Ebene.“</span
                              >
                            </li>
                          </ul>
                        </div>
                        <p id="doc-1fkn5e97c0" identifier="p">
                          Wenn ein Bundesamt zuständige Stelle im Sinne von Art.
                          8 Abs. 1 GeoIG ist, so wird dieses im
                          Geobasisdatenkatalog (GBDK) in Anhang 1 GeoIV (SR
                          510.620) entsprechend bezeichnet. Diese zuständige
                          Stelle trägt somit die Verantwortung für die Umsetzung
                          der Anforderungen des GeoIG und seiner
                          Ausführungsverordnungen. Explizit erwähnt wird die
                          zuständige Stelle in folgenden Artikeln: Art, 9, 12
                          und 13 GeoIG und Art. 14-16, 37-39 GeoIV. Wenn die
                          Zuständigkeit beim Kanton liegt, so ist dies im GBDK
                          ebenfalls entsprechend vermerkt. In diesen Fällen muss
                          der Kanton in seinem Recht festlegen, wer
                          innerkantonal die zuständige Stelle ist, d.h. für das
                          Erheben, Nachführen und Verwalten der entsprechenden
                          Geobasisdaten des Bundesrechts zuständig ist. Regelt
                          der Kanton die innerkantonale Zuständigkeit nicht
                          durch Rechtssatz (Gesetz oder Verordnung), dann
                          richtet sich die Zuständigkeit nach dem Fachbereich,
                          dem die entsprechenden Geodaten zuzuordnen sind (z.B.
                          wäre für die Daten des Lärmbelastungskatasters dann
                          vollumfänglich die kantonal zuständige Fachstelle für
                          den Lärmschutz verantwortlich).
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="1" class="accordion__button">
                    <h3 class="accordion__title">
                      Was wird im Umfeld GeoIG/GeoIV unter «Fachstelle des
                      Bundes» verstanden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="1"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5fmbq1" identifier="p">
                          Grundsätzlich übernehmen die Fachstellen des Bundes
                          die in Art. 8 GeoIG (SR 510.62) bezeichnete Rolle der
                          «Zuständigen Stelle», sobald in ihrem
                          Zuständigkeitsbereich entsprechende Vorschriften für
                          das Erheben, Nachführen und Verwalten der
                          Geobasisdaten fehlen. Damit sind jene Bundesämter
                          (oder deren Abteilungen) gemeint, die auch in der
                          Fachgesetzgebung allgemein als Fachstelle des Bundes
                          in diesem Bereich bezeichnet werden. Diese Stellen
                          sind in der Regel auch für den Vollzug der
                          Bundesgesetzgebung im entsprechenden Fachbereich
                          zuständig. Im Geobasisdatenkatalog (GBDK) werden immer
                          bei denjenigen Geobasisdaten des Bundesrechts, bei
                          denen die Zuständigkeit im Sinne der «Zuständigen
                          Stelle» beim Kanton liegt, explizit «Fachstellen des
                          Bundes» bezeichnet. In diesen Fällen übernehmen diese
                          Fachstellen des Bundes eine koordinierende Funktion
                          und machen gestützt auf die Art. 9, 11, 12, 18, 25 und
                          34 GeoIV (SR 510.620) Vorgaben für ein verbindliches
                          minimales Datenmodell (Art. 9), optional für
                          Darstellungsmodelle (Art. 11), für ein minimales
                          Nachführungskonzept, falls fachgesetzliche
                          Vorschriften keine diesbezüglichen Bestimmungen
                          enthalten (Art. 12), gewährleistet den Zugriff auf
                          Geometadaten (Art. 18), lässt optional für bestimmte
                          Geobasisdaten die Nutzung ohne Einwilligung zu (Art.
                          25) und erlässt optional in ihrem Fachbereich
                          ergänzende Weisungen zu den Geodiensten für
                          Geobasisdaten (Art 34).
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h3 id="doc-1fkmvkaul0" identifier="sectiontitle" class="h3">
                Rechtliche Aspekte
              </h3>
              <ul id="doc-1fkn5u40o0" identifier="faq-teaser" class="accordion">
                <li class="accordion__item">
                  <button aria-controls="0" class="accordion__button">
                    <h3 class="accordion__title">
                      Was wird unter dem Geltungsbereich des GeoIG verstanden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="0"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5jrp91" identifier="p">
                          In der Botschaft zum Bundesgesetz über Geoinformation,
                          Kap. 2.1.2 (BBl 2006 7817) wird dazu ausgeführt: „Das
                          Geoinformationsgesetz ist grundsätzlich anwendbar auf
                          Geobasisdaten des Bundesrechts. Diese werden auf
                          Verordnungsstufe im Geobasisdaten-katalog
                          abschliessend aufgezählt. Weiter gilt das Gesetz für
                          die übrigen Geodaten des Bundes (Art. 2 Abs. 2 GeoIG,
                          SR 510.62). Die Bestimmungen des Gesetzes gelten zudem
                          sinngemäss auch für geologische Daten des Bundes, dies
                          selbst dann, wenn diese keinen Raumbezug aufweisen
                          (Art. 2 Abs. 3 GeoIG).
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="1" class="accordion__button">
                    <h3 class="accordion__title">
                      Ist das GeoIG auch anwendbar auf Geobasisdaten des
                      kantonalen und kommunalen Rechts?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="1"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5m36a1" identifier="p">
                          In der Botschaft zum Bundesgesetz über Geoinformation,
                          Kap. 2.1.2 (BBl 2006 7817) wird dazu ausgeführt: «Das
                          Geoinformationsgesetz ist als Bundesgesetz nicht
                          anwendbar auf Geobasisdaten des kantonalen oder
                          kommunalen Rechts. Es liegt aber in der Kompetenz der
                          Kantone und Gemeinden, Regelungen aus dem
                          Geoinformationsgesetz für ihre jeweiligen
                          Geobasisdaten des kantonalen und kommunalen Rechts als
                          anwendbar zu erklären.» Zur Unterstützung der Kantone
                          bei der Umsetzung des GeoIG (SR 510.62) in ihrem
                          Zuständigkeitsbereich liegt ein entsprechender
                          Leitfaden1) vor.<br /><br /><sup>1) </sup>Leitfaden
                          für die Einführung des neuen Geoinformationsrechts
                          durch die Kantone (D. Kettiger):
                        </p>
                        <p id="doc-1fkn5paru1" identifier="p">
                          Zugang zum
                          <a
                            href="https://www.swisstopo.admin.ch/de/swisstopo/rechtsgrundlagen/rechtliche-fachpublikationen.detail.publication.html/swisstopo-internet/de/documents/dkw-documents/rechtliche_grundlagen/leitfadende.pdf.html"
                            target="_blank"
                            class="link"
                            >Leitfaden </a
                          >(externe Seite, Inhalt wird in neuem Fenster
                          geöffnet.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="2" class="accordion__button">
                    <h3 class="accordion__title">
                      Welches Gesetz hat Vorrang: Fachgesetz oder
                      Geoinformationsgesetz?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="2"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5r85h1" identifier="p">
                          Soweit nicht andere Bundesgesetze abweichende
                          Bestimmungen enthalten, gilt der allgemeine Teil des
                          Geoinformationsgesetzes für die ganze
                          Bundesgesetzgebung. Alle Geobasisdaten, die in der
                          Bundgesetzgebung geregelt sind, sollen grundsätzlich
                          diesen allgemeinen Regelungen folgen. Die Kapitel drei
                          (Landesvermessung), vier (Landesgeologie) und fünf
                          (Amtliche Vermessung) des GeoIG (SR 510.62) gehen
                          abweichenden Vorschriften in anderen Bundesgesetzen
                          vor. Bei Änderungen von Fachgesetzen müssen diese das
                          GeoIG berücksichtigen.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="3" class="accordion__button">
                    <h3 class="accordion__title">
                      Wie können Einträge im Geobasisdatenkatalog (GBDK)
                      geändert d.h. modifiziert, gelöscht oder neu aufgenommen
                      werden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="3"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5s76e1" identifier="p">
                          In der Botschaft zum Bundesgesetz über Geoinformation,
                          Kap. 2.1.2 (BBl 2006 7817) wird dazu ausgeführt: «Die
                          Zuständigkeit zur Nachführung dieses Kataloges folgt
                          grundsätzlich den Regeln der Rechtsetzung. Der
                          Geobasisdatenkatalog gibt den Bestand der
                          Geobasisdaten des Bundesrechts vollständig wieder. Die
                          Fachgesetzgebung legt fest, welche Geobasisdaten des
                          Bundesrechts benötigt werden. Deshalb bestimmt sie
                          grundsätzlich die Änderungen am Bestand der
                          Geobasisdaten. Der Grundsatz der Wahrung der inneren
                          Systematik des Bundesrechts gebietet es, dass
                          gleichzeitig mit einer Änderung der Fachgesetzgebung
                          auch der Geobasisdatenkatalog angepasst wird, wenn
                          durch die Änderung neue Geobasisdaten des Bundesrechts
                          entstehen oder bestehende in ihrer Form geändert oder
                          abgeschafft werden. Die Periodizität und das fachliche
                          Monitoring sowie die Zuständigkeiten der Nachführung
                          des Geobasisdatenkataloges des Bundesrechts werden in
                          einer Verordnung geregelt.» Dies bedeutet, dass ein
                          Bundesamt, welches die Änderung seiner
                          Fachgesetzgebung vorbereitet, immer auch prüfen muss,
                          ob damit Geobasisdaten aufgehoben werden oder ob neue
                          Geobasisdatensätze geschaffen werden. In beiden Fällen
                          ist eine Änderung des Anhangs 1 GeoIV, SR 510.620
                          notwendig.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="4" class="accordion__button">
                    <h3 class="accordion__title">
                      Wie können Einträge in der Sammlung der Geobasisdatensätze
                      des Bundesrechts geändert, d.h. modifiziert, gelöscht oder
                      neu aufgenommen werden?
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="4"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <p id="doc-1fkn5t3oc1" identifier="p">
                          Die Sammlung der Geobasisdatensätze des Bundesrechts
                          bildet einen integralen Bestandteil des Zeitplans für
                          die Einführung der «Minimalen Geodatenmodelle», die
                          als Weisung für die Bundesstellen vom
                          Koordinationsorgan für Geoinformation des Bundes (GKG)
                          am 26. August 2009 erlassen worden ist. Der linke Teil
                          bildet einen Auszug aus Anhang 1 GeoIV, SR 510.620 ab,
                          Änderungen in diesem Teil sind immer nur
                          nachvollzogene Korrekturen der zuvor im
                          Geobasisdatenkatalog (Anhang 1 GeoIV) vorgenommenen
                          Änderungen. Im rechten Teil können Änderungsvorschläge
                          in klar begründeten Fällen via Antrag der zuständigen
                          Stelle an die Geschäftsstelle der GKG (Mail GKG)
                          eingebracht werden. Von der GKG genehmigte Änderungen
                          werden mindestens einmal jährlich veröffentlicht.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h3 id="doc-1fkmvkm360" identifier="sectiontitle" class="h3">
                Weitere Informationen
              </h3>
              <div id="doc-1fkn6009n0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span>Rechtliche Grundlagen (LIEN VERS PAGE INTERNE)</span>
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="/de/zeitplan-weisung-zur-einfhrung-der-minimalen-geodatenmodelle"
                        target="_blank"
                        class="link"
                        >Zeitplan für die Einführung der «Minimalen
                        Geodatenmodelle»</a
                      ></span
                    >
                  </li>
                </ul>
              </div>

              <h3 id="doc-1fle963me0" identifier="sectiontitle" class="h3">
                Kennenlernen von map.geo.admin.ch
              </h3>
              <div id="doc-1fle96ca30" identifier="image">
                <figure>
                  <picture>
                    <img
                      alt="EDU Material"
                      src="https://livingdocs-ch-ch-prod.imgix.net/2021/11/26/849b748b-d000-43b0-9d99-b10184fe4054.jpeg"
                  /></picture>
                  <figcaption />
                </figure>
                <div />
              </div>
              <p id="doc-1fle96oba0" identifier="p">
                Die Schülerinnen und Schüler lernen in der ersten
                Unterrichtseinheit, «Kennenlernen - map.geo.admin.ch», auf
                spielerische Art die Grundfunktionen des Kartenviewers
                map.geo.admin.ch kennen. Im Bereich Arbeitsmaterialien findet
                der Lehrende Dokumente, welche bei der Durchführung dieser
                Unterrichtseinheit behilflich sind (Hinweis: Das Dokument ist
                vom Jahr 2014 - es können einige Weblinks im Dokument,
                ausgenommen map.geo.admin.ch, nicht mehr funktionieren!)
              </p>
              <p id="doc-1fmgd1d3e0" identifier="p">
                <a
                  target="_blank"
                  href="https://cms.ch.ch/fileservice/sdweb-docs-prod-files/files/2021/12/09/bb782ff3-1728-4237-ba83-2359211dc9ec.docx"
                  class="link"
                  >Kennenlernen von map.geo.admin.ch</a
                >&nbsp;(Microsoft Word Dokument)
              </p>
              <h3 id="doc-1fle9h0hr0" identifier="sectiontitle" class="h3">
                Stadt-Land-Unterschiede
              </h3>
              <div id="doc-1fle9h9c70" identifier="image">
                <figure>
                  <picture>
                    <img
                      alt="EDU City-Land"
                      src="https://livingdocs-ch-ch-prod.imgix.net/2021/11/26/dc1bae9d-5c80-4629-ae2f-47aca13411c6.jpeg"
                  /></picture>
                  <figcaption />
                </figure>
                <div />
              </div>
              <p id="doc-1fle9hjg40" identifier="p">
                Die Schülerinnen und Schüler lernen in der zweiten
                Unterrichtseinheit, «Stadt-Land», die Gemeinsamkeiten und
                Unterschiede zwischen Stadt und Land mithilfe des Kartenviewers
                darzustellen und zu interpretieren (Hinweis: Das Dokument ist
                vom Jahr 2014 - es können einige Weblinks im Dokument,
                ausgenommen map.geo.admin.ch, nicht mehr funktionieren!).
              </p>
              <p id="doc-1fmgd2rpe0" identifier="p">
                <a
                  target="_blank"
                  href="https://cms.ch.ch/fileservice/sdweb-docs-prod-files/files/2021/12/09/9dde250c-1b1f-4b0a-9c3b-f89cd1977491.docx"
                  class="link"
                  >Stadt Land Unterschiede</a
                >&nbsp;(Microsoft Word Dokument)
              </p>
              <h3 id="doc-1fle9ke7h0" identifier="sectiontitle" class="h3">
                Verständnis für die Umwelt
              </h3>
              <div id="doc-1fle9kocg0" identifier="image">
                <figure>
                  <picture>
                    <img
                      alt="EDU Understanding"
                      src="https://livingdocs-ch-ch-prod.imgix.net/2021/11/26/eac5d749-b4c4-4482-a2dc-2cbfffbfe43d.jpeg"
                  /></picture>
                  <figcaption />
                </figure>
                <div />
              </div>
              <p id="doc-1fle9kupv0" identifier="p">
                Im Zusammenhang einer Exkursion sammeln die Schülerinnen und
                Schüler in der dritten Unterrichtseinheit, «Verständnis für die
                Umwelt», Daten aus der Umwelt und versuchen ihre Beobachtungen
                mit den Geodaten des Kartenviewers in Verbindung zu bringen und
                auszuwerten (Hinweis: Das Dokument ist vom Jahr 2014 - es können
                einige Weblinks im Dokument, ausgenommen map.geo.admin.ch, nicht
                mehr funktionieren!).
              </p>
              <p id="doc-1fmgd3vfo0" identifier="p">
                <a
                  target="_blank"
                  href="https://cms.ch.ch/fileservice/sdweb-docs-prod-files/files/2021/12/09/8ecf76ef-9a3b-4a99-a3d3-60e34ebf2884.docx"
                  class="link"
                  >Verständnis für die Umwelt</a
                >&nbsp;(Microsoft Word Dokument)
              </p>
              <h3 id="doc-1fle9o3q00" identifier="sectiontitle" class="h3">
                www.sCHoolmaps.ch - Ein Projekt zur Förderung digitaler Karten
                des Bundes im Unterricht
              </h3>
              <div id="doc-1fle9o9n50" identifier="image">
                <figure>
                  <picture>
                    <img
                      alt="EDU sCHoolmaps"
                      src="https://livingdocs-ch-ch-prod.imgix.net/2021/11/26/27029001-f5ef-43d3-9a89-2ad54b09fa0d.jpeg"
                  /></picture>
                  <figcaption />
                </figure>
                <div />
              </div>
              <p id="doc-1fle9oj7i0" identifier="p">
                <a
                  href="https://www.schoolmaps.ch/2017/11/17/kurzeinstieg-in-schoolmaps-ch-arbeitsblatt-der-kommschau-2017/"
                  target="_blank"
                  class="link"
                  >sCHoolmaps.ch</a
                >
                – Das Geoportal Bund geo.admin.ch (swisstopo), das BAKOM und die
                Beratungsstelle für digitale Medien der PH FHNW – imedias
                starteten im Schuljahr 2015/16 das Projekt sCHoolmaps.ch.
                Lehrpersonen, Geografen, Fachdidaktiker und Medienpädagogen
                entwickeln seither gemeinsam Ideen, basierend auf
                map.geo.admin.ch, &nbsp;für den Unterricht und testen diese in
                Schulklassen.
              </p>
              <p id="doc-1fmgd4vin0" identifier="p">
                Zudem liefert das Projekt wertvolles Feedback für die
                Entwicklung des Kartenviewers. Dieser für beide Seiten wertvolle
                Dialog soll auch in den kommenden Jahren weitergeführt werden.
              </p>
              <p id="doc-1fmgd4vio0" identifier="p">
                <a
                  href="http://www.schoolmaps.ch/category/1_unterrichtsideen/"
                  target="_blank"
                  class="link"
                  >Mehr Informationen</a
                >
              </p>
              <h3 id="doc-1fle9s08k0" identifier="sectiontitle" class="h3">
                Kurzeinstieg für Lehrpersonen in sCHoolmaps.ch
              </h3>
              <p id="doc-1fmgd5jeb0" identifier="p">
                <a
                  target="_blank"
                  href="https://cms.ch.ch/fileservice/sdweb-docs-prod-files/files/2021/12/09/12d6acf0-f787-4ef2-b821-9a4bf8a432d4.pdf"
                  class="link"
                  >sCHoolmaps.ch in Kürze für Lehrpersonen</a
                >&nbsp;<br />Hier finden Sie einen Schnellzugang zu den
                Unterrichtseinheiten auf sCHoolmaps.ch.PDF, 1 Seiten, 39 KB
              </p>
              <ul
                id="doc-accordion-container"
                identifier="accordion-container"
                class="accordion"
              >
                <li class="accordion__item">
                  <button aria-controls="0" class="accordion__button">
                    <h3 class="accordion__title">
                      Weiterführende Informationen
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="0"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <h3
                          id="doc-1fle9tnec0"
                          identifier="sectiontitle"
                          class="h3"
                        >
                          Weiterführende Informationen
                        </h3>
                        <div id="doc-1fmgd74fi0" identifier="list">
                          <!---->
                          <!---->
                          <ul class="list list--default">
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="http://www.imedias.ch/"
                                  target="_blank"
                                  class="link"
                                  >Beratungsstelle für digitale Medien -
                                  imedias</a
                                ></span
                              >
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="http://www.educa.ch/"
                                  target="_blank"
                                  class="link"
                                  >Der schweizerische Bildungsserver educa.ch</a
                                ></span
                              >
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="https://www.bakom.admin.ch/bakom/de/home/digital-und-internet/strategie-digitale-schweiz.html"
                                  target="_blank"
                                  class="link"
                                  >Bundesamt für Kommunikation BAKOM</a
                                ></span
                              >
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="http://www.schoolmaps.ch/category/1_unterrichtsideen/"
                                  target="_blank"
                                  class="link"
                                  >sCHoolmaps.ch</a
                                ></span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <button aria-controls="1" class="accordion__button">
                    <h3 class="accordion__title">Arbeitsmaterialien</h3>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="accordion__arrow icon icon--xl"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
                      />
                    </svg>
                  </button>
                  <div
                    aria-hidden="true"
                    data-accordion-id="1"
                    class="accordion__drawer"
                  >
                    <div class="accordion__content">
                      <div>
                        <h3
                          id="doc-1flea47a90"
                          identifier="sectiontitle"
                          class="h3"
                        >
                          Arbeitsmaterialien
                        </h3>
                        <div id="doc-1flea4ke10" identifier="list">
                          <!---->
                          <!---->
                          <ul class="list list--default">
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="https://www.geo.admin.ch/content/geo-internet/de/research-and-education/teachingmaterial-basic-education/_jcr_content/contentPar/tabs/items/arbeitsmaterialien/tabPar/downloadlist/downloadItems/230_1456924493664.download/Hilfedokument.docx"
                                  >Hilfe<br /></a
                                >DOCX, 9 Seiten, 20 MB, Deutsch
                              </span>
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="https://www.geo.admin.ch/content/geo-internet/de/research-and-education/teachingmaterial-basic-education/_jcr_content/contentPar/tabs/items/arbeitsmaterialien/tabPar/downloadlist/downloadItems/231_1456924518857.download/Ortsnamenspiel.docx"
                                  target="_blank"
                                  class="link"
                                  >Ortsnamenspiel<br /></a
                                >Welche der nachstehend aufgeführten Ortschaften
                                gibt es wirklich in der Schweiz? Nur einer der
                                drei Namen ist richtig. Bitte ankreuzen und den
                                dazugehörigen Kanton eintragen. Strassen- oder
                                Flurnamen zählen nicht.DOCX, 2 Seiten, 735 KB,
                                Deutsch
                              </span>
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="https://www.geo.admin.ch/content/geo-internet/de/research-and-education/teachingmaterial-basic-education/_jcr_content/contentPar/tabs/items/arbeitsmaterialien/tabPar/downloadlist/downloadItems/232_1456924550363.download/Stadt-Land-Fluss-Spiel.docx"
                                  target="_blank"
                                  class="link"
                                  >Stadt-Land-Fluss Spiel<br /></a
                                >DOCX, 1 Seiten, 114 KB, Deutsch
                              </span>
                            </li>
                            <li>
                              <!---->
                              <span
                                ><a
                                  href="https://www.geo.admin.ch/content/geo-internet/de/research-and-education/teachingmaterial-basic-education/_jcr_content/contentPar/tabs/items/arbeitsmaterialien/tabPar/downloadlist/downloadItems/233_1456924592456.download/LehrerundSch%C3%BClermeinungen.pdf"
                                  target="_blank"
                                  class="link"
                                  >Lehrer und Schülerfeedback<br /></a
                                >Zusammenfassung der Meinung von Lehrpersonen
                                und Schüler/Innen über den Kartenviewer
                                map.geo.admin.ch und seinen Einsatz im
                                Unterricht.PDF, 5 Seiten, 699 KB, Deutsch</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h3 id="doc-1fmgdcvum0" identifier="sectiontitle" class="h3">
                Umfrage bei Lehrpersonen zu sCHoolmaps.ch
              </h3>
              <p id="doc-1fmgddvg50" identifier="p">
                <a
                  target="_blank"
                  href="https://cms.ch.ch/fileservice/sdweb-docs-prod-files/files/2021/12/09/4008397e-f7ed-431d-b44f-257714efb7e0.pdf"
                  class="link"
                  >Evaluierung 2019 durch das LerNetz.ch</a
                >&nbsp;<br />PDF, 20 Seiten, 2 MB, Deutsch
              </p>
              <h3 id="doc-1fl3t7rg90" class="h3" identifier="sectiontitle">
                Abfrage der Daten
              </h3>
              <p id="doc-1fl3t87pf0" identifier="p">
                Die data.geo.admin.ch STAC - API bietet mehrere
                Abfrageendpunkte:
              </p>
              <table id="doc-1fl3t8mkn0" summary="" identifier="table">
                <thead>
                  <tr>
                    <th id="Endpunkt">Endpunkt</th>
                    <th id="Beschreibung">Beschreibung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tbq840" identifier="p">/</p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tbdtl0" identifier="p">
                          Liefert die API-Capabilities
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tbuqk0" identifier="p">/conformance</p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tcmh90" identifier="p">
                          Info über die Standards, mit denen die API konform ist
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tc5fb2" identifier="p">/collections</p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tcqq00" identifier="p">
                          Verfügbare Datensätze auflisten (Collections)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tc8nm2" identifier="p">
                          /collections/{collectionId}
                        </p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tct1d0" identifier="p">
                          Liefert Metadaten der einzelnen Collection (JSON)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3td9on2" identifier="p">
                          /collections/{collectionId}/items
                        </p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3td9on4" identifier="p">
                          Liefert die Items in der Collection (GeoJSON)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tde2m2" identifier="p">
                          /collections/{collectionId}/items/{featureId}
                        </p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tde2m4" identifier="p">
                          Liefert ein einzelnes Item (GeoJSON)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <p id="doc-1fl3tdju52" identifier="p">/search</p>
                      </div>
                    </th>
                    <!----><!---->
                    <td>
                      <div>
                        <p id="doc-1fl3tdju54" identifier="p">
                          Liefert eine Liste von Items, die den
                          Abfrageparametern entsprechen. Ähnlich wie
                          /collections/{collectionId}/items, führt jedoch die
                          Filterung über alle Collections durch<em />
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 id="doc-1fl3tleg70" class="h3" identifier="sectiontitle">
                Beispiel-Abfragen
              </h3>
              <div id="doc-1fl3tlo6v0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissbuildings3d_2"
                        target="_blank"
                        class="link"
                        >Abfrage der Beschreibung des Datensatzes
                        swissBUILDINGS3D 2.0</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissbuildings3d_2/items"
                        target="_blank"
                        class="link"
                        >Abfrage der Items des Datensatzes swissBUILDINGS3D
                        2.0</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissbuildings3d_2/items/swissbuildings3d_2_2018-07_1091-13"
                        target="_blank"
                        class="link"
                        >Abfrage eines bestimmten Items des Datensatzes
                        swissBUILDINGS3D 2.0</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissbuildings3d_2/items?bbox=7.43,46.95,7.69,47.10"
                        target="_blank"
                        class="link"
                        >Abfrage der Items des Datensatzes swissBUILDINGS3D 2.0
                        in einer Bbox</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissbuildings3d_2/items?datetime=2018-01-01/2018-12-31"
                        target="_blank"
                        class="link"
                        >Abfrage der Items des Datensatzes swissBUILDINGS3D 2.0
                        innerhalb eines bestimmten Datumsbereichs</a
                      ></span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>
