export default {
  title: 'Layouts/Sections',
}

export const MainContentExample = {
  render: () => ({
    template: `
      <section class="section section--default">
        <div class="container">
          Simple Section
        </div>
      </section>`,
  }),
}

export const Titles = {
  render: () => ({
    template: `
      <section class="section bg--accent-01">
        <div class="container">
          <h2 class="section__title">Section title</h2>
          <h2 class="section__subtitle">Section subtitle</h2>

          <div class="card">
            <div class="card__body">
              Content, Card example
            </div>
          </div>

          <div className="section__action">
            Section action, put a button here
          </div>
        </div>
      </section>`,
  }),
}

export const DarkSections = {
  render: () => ({
    template: `
      <section class="section bg--accent-03">
        <div class="container">
          <h2 class="section__title">Negative section title</h2>

          <div class="card card--highlight">
            <div class="card__content">
              <div class="card__body">
                Card example
              </div>
            </div>
          </div>

          <div className="section__action">
            <a href="#" title="alle Infos auf eine Blick" class="btn btn--bare btn--icon-right">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon icon--ArrowRight icon icon--base ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Read more</span>
            </a>
          </div>
        </div>
      </section>`,
  }),
}

export const Paddings = {
  render: () => ({
    template: `
      <main>
        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with padding bottom only (padding top is removed because previous section has the same background color)
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-02">
          <div class="container">
            Section with top and padding bottom
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with consecutive containers. Container 1.
          </div>

          <div class="container">
            Section with consecutive containers. Container 2. Padding top is added.
          </div>
        </section>
      </main>`,
  }),
}
