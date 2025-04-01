export default {
  title: 'Components/Link',
}

export const DefaultLink = {
  render: () => ({
    template: `
      <div>
        <a>Link</a> without style
      </div>
    `,
  }),
}

export const ParagraphLink = {
  render: () => ({
    template: `
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a>metus tempor</a> at. Donec volutpat ex et enim gravida vehicula.</p>
      </main>
    `,
  }),
}

export const ForceLink = {
  render: () => ({
    template: `
      <div>
        <a class="link">Link</a> with style
      </div>
    `,
  }),
}

export const IconLink = {
  render: () => ({
    template: `
      <main>
        <p>
          <a href="#" class="btn btn--link" target="_blank">
            <svg viewBox="0 0 24 24" class="btn__icon">
              <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
            </svg>

            <span class="btn__text">
              Standort auf Karte anzeigen
            </span>
          </a>
        </p>
      </main>
    `,
  }),
}

export const IconExternalLink = {
  render: () => ({
    template: `
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a href="http://admin.ch" rel="external">sementical external</a> at. Donec volutpat ex et enim <a href="http://admin.ch" class="link--external">forced external</a> gravida vehicula.</p>
      </main>
    `,
  }),
}
