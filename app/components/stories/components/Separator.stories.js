export default {
  title: 'Components/Separator',
}

export const Separator = {
  render: () => ({
    template: `
      <div>
        <div>Content above</div>
          <hr class="separator" />
        <div>Content below</div>
      </div>
    `,
  }),
}

export const SeparatorSpacings = {
  render: () => ({
    template: `
      <div>
        <div>Content above</div>
          <hr class="separator separator--xl" />
        <div>Content below</div>
      </div>
    `,
  }),
}
