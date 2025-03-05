import BackToTopBtn from '../../ch/components/BackToTopBtn.vue'

export default {
  title: 'Components/BackToTopBtn',
  component: BackToTopBtn,
  argTypes: {
    type: {
      table: { type: { summary: ['string: negative, outline'] } },
      options: ['negative', 'outline'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  args: {
    type: 'outline',
    wrapper: false,
  },
}

export const Variations = {
  render: () => ({
    template: `
      <button type="button" class="back-to-top-btn back-to-top-btn--negative">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="back-to-top-btn__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m19.044 14.731-6.669-3.85-6.669 3.85-.375-.649 7.044-4.067 7.044 4.067z" />
        </svg>
      </button>

      <button type="button" class="back-to-top-btn back-to-top-btn--outline">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="back-to-top-btn__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m19.044 14.731-6.669-3.85-6.669 3.85-.375-.649 7.044-4.067 7.044 4.067z" />
        </svg>
      </button>
    `,
  }),
}
