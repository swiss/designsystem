<template>
  <section class="section bg--secondary-50">
    <div class="container area gap--responsive">
      <div class="quote">
        <div class="quote__text">
          <h3 class="quote__title">
            Unsere Welt entwickelt sich ohne Rücksicht, und das Ergebnis ist ein Verlust der Artenvielfalt, Energieprobleme, Staus in den Städten. Aber Geografie kann, wenn sie richtig eingesetzt wird, dazu genutzt werden, nachhaltige und lebenswertere Städte neu zu gestalten
          </h3>
          <div class="quote__author">
            Jack Dangermond, geograph
          </div>
        </div>
        <figure class="quote__image">
          <picture>
            <source
              srcset="https://placekitten.com/g/600/600"
              media="(min-width: 1024px)"
            />
            <img src="https://placekitten.com/g/400/400" alt="cat"  class="shadow-2xl" />
          </picture>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Quote',
  props: {},
  components: {},
}
</script>
