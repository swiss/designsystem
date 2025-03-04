import Textarea from '../../ch/components/Textarea.vue'

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,

  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    size: {
      table: {
        type: { summary: ['string: sm, base, lg'] },
      },
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    messageType: {
      table: {
        type: { summary: ['string: error, warning, success, info'] },
      },
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Textarea },
    setup: () => ({ args }),
    template: `<Textarea v-bind="args" />`,
  }),
  args: {
    size: 'base',
    label: 'Label',
    name: 'textarea-name',
    id: 'textarea-id',
    placeholder: 'Placeholder',
  },
}

export const DisabledTextarea = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--base" disabled>Disabled</textarea>
      </div>
    `,
  }),
}

export const SizesTextarea = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--sm">Small</textarea>
        <textarea class="input--base">Default</textarea>
        <textarea class="input--lg">Large</textarea>
      </div>
    `,
  }),
}

export const RequiredTextarea = {
  render: () => ({
    template: `
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base" required />
      </div>
    `,
  }),
}

export const MessagesTextarea = {
  render: () => ({
    template: `
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    `,
  }),
}
