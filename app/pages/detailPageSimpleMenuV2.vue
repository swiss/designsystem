<template>
  <div>
    <AlterBodyClasses
      :isMobileMenuOpen="getMobileMenuIsOpen()"
      :isIntranet="isIntranet"
      :isFreebrand="isFreebrand"
      :usesMenuV2="true"
    />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar v-if="!isFreebrand" :isOpen="false" />
      <TopHeader
        :isFreebrand="isFreebrand"
        :isMenuV2="true"
        @top-header-search-toggle="onTopHeaderSearchToggle"
      />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenuV2 />
      <div class="search--mobile" :class="searchActive ? 'active' : ''">
        <div id="search-mobile-group" class="top-header-search__group">
          <Input
            id="search-mobile"
            type="search"
            label="Suche in dieser Website"
            placeholder="Suche"
            autocomplete="off"
          />
          <Btn
            tabindex="-1"
            aria-hidden="true"
            label="Suchen auf dieser Website"
            icon="Search"
            icon-pos="only"
            variant="bare"
            size="lg"
          />
        </div>
      </div>
      <Breadcrumb />
      <div class="container">
        <ShareBar />
      </div>
    </header>
    <main id="main-content">
      <Hero type="default" :meta-infos="metaInfos" :authors="authors">
        <template #title>
          Web Mapping Services WMS: Verfügbare Dienste und Daten
        </template>
        <template #description>
          Das Konzept des INTERLIS Model Repository sieht vor, Datenmodelle als
          http-Ressource nutzbar zu machen. Dabei werden die
          INTERLIS-Modelldateien auf einem Webserver abgelegt, und können
          beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden. Der
          Vorteil für einen Benutzer liegt darin, dass die Modelldateien und
          evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein
          müssen.
          <a id="share-link" href="#" class="link">Diese Seite teilen</a>
        </template>
        <template #image>
          <figure>
            <picture>
              <source
                srcset="https://picsum.photos/1282/721/?image=29"
                media="(min-width: 1800px)"
              />
              <source
                srcset="https://picsum.photos/1192/670/?image=28"
                media="(min-width: 1024px)"
              />
              <source
                srcset="https://picsum.photos/800/450/?image=29"
                media="(min-width: 768px)"
              />
              <source
                srcset="https://picsum.photos/680/382/?image=28"
                media="(min-width: 480px)"
              />
              <img
                src="https://picsum.photos/480/270/?image=29"
                alt="ratio is 16/9"
              />
            </picture>
            <figcaption>
              Datenmodelle als http-Ressource nutzbar zu machen. Der Vorteil für
              einen Benutzer liegt darin, dass die Modelldateien und evtl.
              weitere importierte Datenmodelle nicht lokal vorhanden sein müssen
              —&nbsp;©&nbsp;Photograph Name
            </figcaption>
          </figure>
        </template>
      </Hero>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Carousel with few images</h2>
            <p>
              To display a few images as a carousel, set the pagination type to
              «bullets». Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>

            <SlideshowExample
              :id="1"
              paginationType="bullets"
              loop
              :slides="slides"
            />

            <h2 class="h2">Carousel with more than 5 images</h2>
            <p>
              To display a more images in a carousel, set the pagination type to
              «fraction». Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
              <Popover id="1" label="Extra infos in a popover">
                <p>Popover content</p>
                <a href="#">Link</a>
              </Popover>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation
              <Popover id="2" color="blue" :icon="true">
                <p>Popover content, icon only, blue color</p>
                <a href="#">Link</a>
              </Popover>
              zur Publikation eingereicht werden.
            </p>

            <SlideshowExample
              :id="2"
              paginationType="fraction"
              loop
              :slides="slides"
            />

            <p>
              To display a single image, use the recommended markup with figure,
              picture and img elements.
            </p>

            <figure>
              <picture>
                <source
                  srcset="https://picsum.photos/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://picsum.photos/1600/900" alt="cat" />
              </picture>
              <figcaption>
                Image label here —&nbsp;©&nbsp;Photograph Name
              </figcaption>
            </figure>

            <h2 class="h2">Audio player</h2>
            <p>
              Use a default audio element wrapped into an audio player class.
              Die Datenmodellablage ist moderiert und die Erfassung neuer
              Datenmodelle wird durch Modellierung vorgenommen.
            </p>

            <AudioPlayer
              title="First of August speech"
              description="Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              copyright="Reuters"
              url="https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3"
              type="audio/mp3"
            />

            <h2 class="h2">Datenmodellablage ansehen</h2>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>

            <figure>
              <div class="ratio ratio--16/9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM"
                  title="Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal"
                  frameborder="0"
                />
              </div>
              <figcaption>
                Geoinformation - Alles findet irgendwo statt — © Swiss
                Geoportal
              </figcaption>
            </figure>

            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>

            <TextImage type="default">
              <template #title>
                Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                publizieren
              </template>
              <template #description>
                Über den Kontakt models@geo.admin.ch können die
                INTERLIS-Modelldatei und die Modelldokumentation (als PDF
                Dokument) zur Publikation eingereicht werden. Über den Kontakt
                models@geo.admin.ch können die INTERLIS-Modelldatei und die
                Modelldokumentation (als PDF Dokument) zur Publikation
                eingereicht werden.
              </template>
              <template #image>
                <figure>
                  <picture>
                    <source
                      srcset="https://picsum.photos/1600/1200"
                      media="(min-width: 1024px)"
                    />
                    <img src="https://picsum.photos/800/600" alt="cat" />
                  </picture>
                </figure>
              </template>
            </TextImage>

            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>

            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <blockquote>
              Der Modellkatalog kann unter angesehen werden. Simple quote in a
              text flow.
            </blockquote>
            <p>
              Der Modellkatalog kann unter angesehen werden. Datenmodellablage
              <a href="#" target="_blank">external link</a> publizieren. Für die
              Publikation der «minimalen Geodatenmodelle» besteht kein direkter
              Online-Zugang. Die Datenmodellablage ist moderiert und die
              Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
            <Newsletter
              type="inline"
              state="default"
              title="Abonnieren Sie unseren Newsletter"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
              input-label="E-Mail"
              button-label="Newsletter abonnieren"
              success-text="Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>"
            />
            <p>
              Der <strong>strong</strong> Modellkatalog kann unter
              <mark>mark</mark> angesehen werden <del>Strike through</del> and
              <u>underline</u>. Ein neues «minimales Geodatenmodell» in der
              Datenmodellablage publizieren. Für die Publikation der «minimalen
              Geodatenmodelle» besteht kein direkter Online-Zugang. Die
              Datenmodellablage ist moderiert und die Erfassung neuer
              Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der
              Empfehlungen zur Modellierung wird die Modelldokumentation
              veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in
              jedem Fall in die Datenmodellablage eingepflegt.
            </p>

            <ul class="download-items">
              <li>
                <DownloadItem
                  filename="dummy.pdf"
                  title="Information on the usage of websites"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor."
                  url="../../../static/documents/dummy.pdf"
                  type="PDF"
                  date="22.01.2022"
                />
              </li>
              <li>
                <DownloadItem
                  filename="image.png"
                  title="Information on the usage of websites"
                  description=""
                  url="../../../static/images/html-structure.png"
                  type="PNG"
                  date="22.01.2022"
                />
              </li>
            </ul>

            <ul>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues
                <a href="#" target="_blank">external link in list</a>
                publizieren
              </li>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
            </ul>

            <ol>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
            </ol>

            <h2 class="h2">Datenmodellablage ansehen</h2>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>

            <TextImage>
              <template #title> Modelldokumentation </template>
              <template #description>
                Über den Kontakt models@geo.admin.ch können die
                Modelldokumentation zur Publikation eingereicht werden. Über den
                Kontakt models@geo.admin.ch können die zur Publikation
                eingereicht werden.
              </template>
              <template #image>
                <figure>
                  <picture>
                    <source
                      srcset="https://picsum.photos/1600/1200"
                      media="(min-width: 1024px)"
                    />
                    <img src="https://picsum.photos/800/600" alt="cat" />
                  </picture>
                </figure>
              </template>
            </TextImage>

            <h2 class="h2">Modellkatalog ansehen</h2>
            <p>
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren. Für die Publikation der «minimalen Geodatenmodelle»
              besteht kein direkter Online-Zugang. Die Datenmodellablage ist
              moderiert und die Erfassung neuer Datenmodelle wird durch
              GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur
              Modellierung wird die Modelldokumentation veröffentlicht oder
              verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die
              Datenmodellablage eingepflegt.
            </p>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Bare Link Liste mit Beschreibung</h2>
            <ul class="list list--bare list--loose list--indented">
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-01.html"
                  >(Haager-) Übereinkommen vom 5. Oktober 1961 über die
                  Zuständigkeit der Behörden und das anzuwendende Recht auf dem
                  Gebiet des Schutzes von Minderjährigen</a
                >

                <p>(SR 0.211.231.01)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-011.html"
                  >(Haager) Übereinkommen vom 19. Oktober 1996 über die
                  Zuständigkeit, das anzuwendende Recht, die Anerkennung,
                  Vollstreckung und Zusammenarbeit auf dem Gebiet der
                  elterlichen Verantwortung und der Massnahmen zum Schutz von
                  Kindern</a
                >

                <p>(SR 0.211.231.011)</p>
              </li>
              <li class="">
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-01.html"
                  >Europäisches Übereinkommen vom 20. Mai 1980 über die
                  Anerkennung und Vollstreckung von Entscheidungen über das
                  Sorgerecht für Kinder und die Wiederherstellung des
                  Sorgerechts</a
                >

                <p>(SR 0.211.230.01)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-02.html"
                  >(Haager-) Übereinkommen vom 25. Oktober 1980 über die
                  zivilrechtlichen Aspekte internationaler Kindesentführung</a
                >

                <p>(SR 0.211.230.02)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-221-311.html"
                  >(Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz von
                  Kindern und die Zusammenarbeit auf dem Gebiet der
                  internationalen Adoption</a
                >

                <p>(SR 0.211.221.311)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-232-1.html"
                  >(Haager) Übereinkommen vom 13. Januar 2000 über den
                  internationalen Schutz von Erwachsenen</a
                >

                <p>(SR 0.211.232.1)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Doted Link Liste mit Beschreibung</h2>
            <ul class="list list--default list--loose list--indented">
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-01.html"
                  >(Haager-) Übereinkommen vom 5. Oktober 1961 über die
                  Zuständigkeit der Behörden und das anzuwendende Recht auf dem
                  Gebiet des Schutzes von Minderjährigen</a
                >

                <p>(SR 0.211.231.01)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-011.html"
                  >(Haager) Übereinkommen vom 19. Oktober 1996 über die
                  Zuständigkeit, das anzuwendende Recht, die Anerkennung,
                  Vollstreckung und Zusammenarbeit auf dem Gebiet der
                  elterlichen Verantwortung und der Massnahmen zum Schutz von
                  Kindern</a
                >

                <p>(SR 0.211.231.011)</p>
              </li>
              <li class="">
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-01.html"
                  >Europäisches Übereinkommen vom 20. Mai 1980 über die
                  Anerkennung und Vollstreckung von Entscheidungen über das
                  Sorgerecht für Kinder und die Wiederherstellung des
                  Sorgerechts</a
                >

                <p>(SR 0.211.230.01)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-02.html"
                  >(Haager-) Übereinkommen vom 25. Oktober 1980 über die
                  zivilrechtlichen Aspekte internationaler Kindesentführung</a
                >

                <p>(SR 0.211.230.02)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-221-311.html"
                  >(Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz von
                  Kindern und die Zusammenarbeit auf dem Gebiet der
                  internationalen Adoption</a
                >

                <p>(SR 0.211.221.311)</p>
              </li>
              <li>
                <a
                  class="link"
                  href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-232-1.html"
                  >(Haager) Übereinkommen vom 13. Januar 2000 über den
                  internationalen Schutz von Erwachsenen</a
                >

                <p>(SR 0.211.232.1)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Studien</h2>
            <ul class="list">
              <li>
                <DownloadItem
                  filename="dummy.pdf"
                  title="Schlussbericht: Langzeitbeziehende in der Nothilfe"
                  url="../static/documents/dummy.pdf"
                  type="PDF"
                  date="13.01.2022"
                  headingLevel="h3"
                  size="684 kB"
                />
              </li>
              <li>
                <DownloadItem
                  filename="dummy.pdf"
                  title="Schlussbericht: Langzeitbezug von Nothilfe durch weggewiesene Asylsuchende"
                  url="../static/documents/dummy.pdf"
                  type="PDF"
                  date="13.01.2022"
                  headingLevel="h3"
                  size="529kB"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Card link list</h2>
            <ul class="list">
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      (Haager-) Übereinkommen vom 5. Oktober 1961 über die
                      Zuständigkeit der Behörden und das anzuwendende Recht auf
                      dem Gebiet des Schutzes von Minderjährigen
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.231.01) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      (Haager) Übereinkommen vom 19. Oktober 1996 über die
                      Zuständigkeit, das anzuwendende Recht, die Anerkennung,
                      Vollstreckung und Zusammenarbeit auf dem Gebiet der
                      elterlichen Verantwortung und der Massnahmen zum Schutz
                      von Kindern
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.231.011) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      Europäisches Übereinkommen vom 20. Mai 1980 über die
                      Anerkennung und Vollstreckung von Entscheidungen über das
                      Sorgerecht für Kinder und die Wiederherstellung des
                      Sorgerechts
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.230.01) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      (Haager-) Übereinkommen vom 25. Oktober 1980 über die
                      zivilrechtlichen Aspekte internationaler Kindesentführung
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.230.02) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      (Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz
                      von Kindern und die Zusammenarbeit auf dem Gebiet der
                      internationalen Adoption
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.221.311) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
              <li>
                <Card type="flat">
                  <template #title>
                    <h3>
                      (Haager) Übereinkommen vom 13. Januar 2000 über den
                      internationalen Schutz von Erwachsenen
                    </h3>
                  </template>
                  <template #footerInfo> (SR 0.211.232.1) </template>
                  <template #footerAction>
                    <Btn
                      to="#"
                      variant="outline"
                      icon-pos="only"
                      icon="ArrowRight"
                      label="Mehr anschauen"
                    />
                  </template>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Large table example</h2>
            <TableSortable
              caption="This table could be even larger with a .container__full class on the parent."
              :displayCaption="true"
            />
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Carousel with few images</h2>
            <p>
              To display a few images as a carousel, set the pagination type to
              «bullets». Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Begin anywhere."
        author="John Cage"
        :image="{
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/576px-John_Cage_%281988%29.jpg',
          width: '400',
          height: '400',
          alt: 'image name',
          source: {
            srcset:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/768px-John_Cage_%281988%29.jpg',
            width: '800',
            height: '800',
            media: '(min-width: 1024px)',
          },
        }"
      />

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
            <div>
              <h2 class="h2">Themen</h2>
              <RelatedTags :tags="tags" bare></RelatedTags>
            </div>
          </div>
        </div>
      </section>

      <MoreInfosAccordionSection />

      <ContactSection />
    </main>
    <Modal
      title="Inhalt teilen"
      triggerElements=".share-bar__share-button, #share-link"
      layout="xs"
    >
      <template #body>
        <Card type="default">
          <template #description>
            <div class="flex flex-wrap justify-center gap-6">
              <a href="#" class="link" title="Share on Facebook">
                <SvgIcon size="2xl" icon="Facebook" label="Facebook" />
              </a>
              <a href="#" class="link" title="Share on Twitter">
                <SvgIcon size="2xl" icon="Twitter" label="Twitter" />
              </a>
              <a href="#" class="link" title="Share on LinkedIn">
                <SvgIcon size="2xl" icon="LinkedIn" label="LinkedIn" />
              </a>
              <a href="#" class="link" title="Share on Xing">
                <SvgIcon size="2xl" icon="Xing" label="Xing" />
              </a>
              <a href="#" class="link" title="Share on Whatsapp">
                <SvgIcon size="2xl" icon="Phone" label="Whatsapp" />
              </a>
            </div>
            <hr class="separator" />
            <div class="pt-3">
              <Input
                id="my-id"
                size="base"
                label="Shareable URL"
                value="https://www.admin.ch/gov/de/start/departemente/departement-des-innern-edi.html"
                :hideLabel="true"
                :readonly="true"
              />
              <div class="share-url">
                <Btn
                  variant="outline"
                  size="base"
                  label="URL Kopieren"
                  class="mt-3"
                  @click="URLIsCopied = !URLIsCopied"
                />
                <div aria-live="polite">
                  <Badge
                    v-if="URLIsCopied"
                    label="URL wurde kopiert"
                    color="green"
                    size="sm"
                    icon="Checkmark"
                    class="mt-3"
                  />
                </div>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </Modal>
    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AudioPlayer from '../components/ch/components/AudioPlayer.vue'
import DownloadItem from '../components/ch/components/DownloadItem.vue'
import Newsletter from '../components/ch/components/Newsletter.vue'
import RelatedTags from '../components/ch/components/RelatedTags.vue'
import TextImage from '../components/ch/components/TextImage.vue'
import SlideshowExample from '../components/ch/demo/SlideshowExample.vue'
import TableSortable from '../components/ch/demo/TableSortable.vue'
import ContactSection from '../components/ch/sections/ContactSection.vue'
import Hero from '../components/ch/sections/Hero.vue'
import MoreInfosAccordionSection from '../components/ch/sections/MoreInfosAccordionSection.vue'
import QuoteSection from '../components/ch/sections/QuoteSection.vue'
import Badge from '../components/ch/components/Badge.vue'
import Btn from '../components/ch/components/Btn.vue'
import Card from '../components/ch/components/Card.vue'
import Input from '../components/ch/components/Input.vue'
import Modal from '../components/ch/components/Modal.vue'
import Popover from '../components/ch/components/Popover.vue'
import SvgIcon from '../components/ch/components/SvgIcon.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenuV2 from '../components/ch/sections/MobileMenuV2.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import { reactive, ref, onMounted, nextTick } from 'vue'
import { useLayoutStore } from '../store/layout'
import type { Author } from '../types'

const screenSize = ref(0)
const URLIsCopied = ref(false)
const slides = reactive([
  {
    image: {
      src: 'https://picsum.photos/1024/768/?image=29',
      width: '1024',
      height: '768',
      alt: 'image name',
    },
    source: {
      srcset: 'https://picsum.photos/2048/1152/?image=29',
      width: '2048',
      height: '1152',
      media: '(min-width: 1024px)',
    },
    caption: {
      title: 'Image one title',
      description: 'Image one description',
      copyright: 'Photograph name',
    },
  },
  {
    image: {
      src: 'https://picsum.photos/1024/768/?image=28',
      width: '1024',
      height: '768',
      alt: 'image name',
    },
    source: {
      srcset: 'https://picsum.photos/2048/1152/?image=28',
      width: '2048',
      height: '1152',
      media: '(min-width: 1024px)',
    },
    caption: {
      title: 'Image two, title without description',
      copyright: 'Photograph name',
    },
  },
  {
    image: {
      src: 'https://picsum.photos/1024/768/?image=1045',
      width: '1024',
      height: '768',
      alt: 'image name',
    },
    source: {
      srcset: 'https://picsum.photos/2048/1152/?image=1045',
      width: '2048',
      height: '1152',
      media: '(min-width: 1024px)',
    },
    caption: {
      description: 'Image three, description only',
      copyright: 'Photograph name',
    },
  },
])
const metaInfos = reactive(['Webartikel', '23. Februar 2022'])
const authors = reactive([
  {
    name: 'Maria Muster',
    img: 'https://picsum.photos/120/120/?image=29',
  },
  {
    name: 'Jean-Jaques Langerename',
    img: 'https://picsum.photos/120/120/?image=30',
    url: '#',
  },
  {
    name: 'Hans Höllman',
    img: 'https://picsum.photos/120/120/?image=31',
  },
  {
    name: 'Katja Anna-Beerli',
    img: 'https://picsum.photos/120/120/?image=32',
  },
] as Author[])
const tags = reactive([
  { label: 'Datenmodell', url: '#' },
  { label: 'Energie', url: '#' },
  { label: 'INTERLIS', url: '#' },
  { label: 'GKG/KOGIS', url: '#' },
  { label: 'Energie', url: '#' },
  { label: 'INTERLIS', url: '#' },
  { label: 'GKG/KOGIS', url: '#' },
  { label: 'Datenmodell', url: '#' },
])
const searchActive = ref(false)

defineProps({
  isIntranet: {
    type: Boolean,
    default: false,
  },
  isFreebrand: {
    type: Boolean,
    default: false,
  },
})

const resizeWindow = function () {
  screenSize.value = document.body.clientWidth
  if (screenSize.value > 1024) {
    searchActive.value = false
  }
}

const getMobileMenuIsOpen = function () {
  return useLayoutStore().mobileMenuIsOpen
}

async function onTopHeaderSearchToggle() {
  searchActive.value = !searchActive.value
  if (searchActive.value) {
    await nextTick()
    document.getElementById('search-mobile')!.focus()
  }
}

onMounted(async () => {
  await nextTick()
  document.addEventListener('click', (event) => {
    if (
      !(event.target as HTMLElement).closest(
        '#search-mobile-group, #search-main-wrapper',
      )
    ) {
      searchActive.value = false
    }
  })

  window.addEventListener('resize', resizeWindow)
})
</script>
