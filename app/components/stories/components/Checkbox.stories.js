import Checkbox from '../../ch/components/Checkbox.vue'

export default {
  title: 'Components/Form/Input Checkbox',
  component: Checkbox,

  argTypes: {
    variant: {
      table: { type: { summary: ['string: outline, negative'] } },
      options: ['outline', 'negative'],
      control: { type: 'select' },
    },
    size: {
      table: { type: { summary: ['string: sm, base, lg'] } },
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    message: {},
    messageType: {
      table: { type: { summary: ['string: error, warning, success, info'] } },
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: `
      <div>
        <Checkbox v-bind="args" />
      </div>
    `,
  }),
  args: {
    variant: 'outline',
    size: 'base',
    label: 'Label',
    name: 'checkbox-name',
    id: 'checkbox-id',
  },
}

export const NegativeCheckbox = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--negative input--base" />
    `,
  }),
}

export const DisabledInput = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--outline input--base" disabled />
      <input type="checkbox" class="input--outline input--base" disabled checked />
      <input type="checkbox" class="input--negative input--base" disabled />
      <input type="checkbox" class="input--negative input--base" disabled checked />
    `,
  }),
}

export const SizesCheckbox = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--outline input--sm" value="input--sm" />
      <input type="checkbox" class="input--outline input--base" value="input--base" />
      <input type="checkbox" class="input--outline input--lg" value="input--lg" />
    `,
  }),
}

export const RequiredCheckbox = {
  render: () => ({
    template: `
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--outline input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    `,
  }),
}

export const MessagesCheckbox = {
  render: () => ({
    template: `
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--outline input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    `,
  }),
}
