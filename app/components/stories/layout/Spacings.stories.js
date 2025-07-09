export default {
  title: 'Layouts/Spacings',
}

export const WithVerticalSpacing = {
  render: () => ({
    template: `
      <section class="section section--default">
        <div class="container vertical-spacing">
          <h3 class="h3">Title H3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>

          <figure>
            <picture>
              <source srcset="https://picsum.photos/1600/900" media="(min-width: 800px)" />

              <img src="https://picsum.photos/1600/900" alt="cat" />
            </picture>

            <figcaption>
              Image label here — ©  Photograph Name
            </figcaption>
          </figure>

          <h3 class="h3">Title H3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>
        </div>
      </section>`,
  }),
}

export const WithoutVerticalSpacing = {
  render: () => ({
    template: `
      <section class="section section--default">
        <div class="container">
          <h3 class="h3">Title H3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>

          <figure>
            <picture>
              <source srcset="https://picsum.photos/1600/900" media="(min-width: 800px)" />

              <img src="https://picsum.photos/1600/900" alt="cat" />
            </picture>

            <figcaption>
              Image label here — © Photograph Name
            </figcaption>
          </figure>

          <h3 class="h3">Title H3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
            nisl, ultricies quis aliquet ac, ultrices nec felis. Proin gravida
            purus et ipsum placerat
          </p>
        </div>
      </section>`,
  }),
}
