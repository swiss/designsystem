import Btn from '../../ch/components/Btn.vue'

export default {
  title: 'Components/Button',
  component: Btn,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: [
            'string: outline, bare, filled, link',
          ],
        },
      },
      options: [
        'outline',
        'bare',
        'filled',
        'link',
      ],
      control: { type: 'select' },
    },
    size: {
      table: { type: { summary: ['string: sm, base, lg'] } },
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    icon: {
      table: {
        type: { summary: ['string: ArrowRight, ArrowLeft, Checkmark'] },
      },
      options: ['ArrowRight', 'ArrowLeft', 'Checkmark'],
      control: { type: 'select' },
    },
    iconPos: {
      table: { type: { summary: ['string: none, only, left, right'] } },
      options: ['none', 'only', 'left', 'right'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  args: {
    variant: 'outline',
    size: 'base',
    icon: 'ArrowRight',
    iconPos: 'none',
    label: 'Button text',
  },
}

export const ButtonOrLink = {
  render: () => ({
    template: `
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a button
        </span>
      </button>

      <a href="#" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a link
        </span>
      </a>`,
  }),
}

export const ButtonVariations = {
  render: () => ({
    template: `
      <div style="display:flex; gap:1rem; padding:1rem;">
        <button type="button" class="btn btn--base btn--outline">
          <span class="btn__text">btn--outline</span>
        </button>

        <button type="button" class="btn btn--base btn--filled">
          <span class="btn__text">btn--filled</span>
        </button>

        <button type="button" class="btn btn--base btn--bare">
          <span class="btn__text">btn--bare</span>
        </button>

        <button type="button" class="btn btn--base btn--link">
          <span class="btn__text">btn--link</span>
        </button>
      </div>`,
  }),
}

export const Sizes = {
  render: () => ({
    template: `
      <button type="button" class="btn btn--outline btn--sm">
        <span class="btn__text">
          btn--sm
        </span>
      </button>

    <button type="button" class="btn btn--outline btn--base">
      <span class="btn__text">btn--base</span>
    </button>

      <button type="button" class="btn btn--outline btn--lg">
        <span class="btn__text">
          btn--lg
        </span>
      </button>`,
  }),
}

export const Icons = {
  render: () => ({
    template: `
      <button type="button" class="btn btn--outline btn--base btn--icon-only">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
        </svg>

        <span class="btn__text">Button text</span>
      </button>

      <button type="button" class="btn btn--outline btn--base btn--icon-left">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m8.306 5.116-4.066 7.044 4.066 7.044.65-.375-3.633-6.294h15.187v-.75h-15.187l3.633-6.294z" />
        </svg>

        <span class="btn__text">icon-left</span>
      </button>`,
  }),
}

export const ButtonLinks = {
  render: () => ({
    template: `
      <div>
        <button type="button" class="btn btn--link">
          <span class="btn__text">Button link</span>
        </button>

        <hr />

        <button type="button" class="btn btn--link btn--icon-right">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Button link with right icon</span>
        </button>

      </div>`,
  }),
}
