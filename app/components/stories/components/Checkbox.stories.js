import Checkbox from '../../ch/components/Checkbox.vue'

export default {
  title: 'Components/Form/Input Checkbox',
  component: Checkbox,

  argTypes: {
    theme: {
      table: {
        table: {
          type: { summary: ['string?: light, dark'] },
        },
        options: [null, 'light', 'dark'],
        control: { type: 'select' },
      },
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
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
    theme: 'light',
    size: 'base',
    label: 'Label',
    name: 'checkbox-name',
    id: 'checkbox-id',
  },
}

export const NegativeCheckbox = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--base" data-default-theme="dark" />
    `,
  }),
}

export const DisabledInput = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--base" disabled />
      <input type="checkbox" class="input--base" disabled checked />
      <input type="checkbox" class="input--base" disabled data-default-theme="dark" />
      <input type="checkbox" class="input--base" disabled checked data-default-theme="dark" />
    `,
  }),
}

export const SizesCheckbox = {
  render: () => ({
    template: `
      <input type="checkbox" class="input--sm" value="input--sm" />
      <input type="checkbox" class="input--base" value="input--base" />
      <input type="checkbox" class="input--lg" value="input--lg" />
    `,
  }),
}

export const RequiredCheckbox = {
  render: () => ({
    template: `
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--base" value="" />
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
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    `,
  }),
}
