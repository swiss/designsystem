import Radio from '../../ch/components/Radio.vue'

export default {
  title: 'Components/Form/Input Radio',
  component: Radio,

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
    message: {},
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
    components: { Radio },
    setup: () => ({ args }),
    template: `
      <div>
        <Radio v-bind="args" />
      </div>
    `,
  }),
  args: {
    size: 'base',
    label: 'Label',
    name: 'radio-name',
    id: 'radio-id',
  },
}

export const DisabledRadio = {
  render: () => ({
    template: `
      <input type="radio" class="input--base" disabled />
      <input type="radio" class="input--base" disabled checked />
      <label for=""><input type="radio" class="input--base" disabled data-default-theme="dark" />dark-themed disabled radio</label>
      <label for=""><input type="radio" class="input--base" disabled checked data-default-theme="dark" />dark-themed disabled checked radio</label>
    `,
  }),
}

export const SizesRadio = {
  render: () => ({
    template: `
      <input type="radio" class="input--sm" value="input--sm" />
      <input type="radio" class="input--base" value="input--base" />
      <input type="radio" class="input--lg" value="input--lg" />
    `,
  }),
}

export const RequiredRadio = {
  render: () => ({
    template: `
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input" value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input" value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input" value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    `,
  }),
}

export const MessageRadio = {
  render: () => ({
    template: `
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    `,
  }),
}
