export default {
  title: 'Layouts/Ratios',
}

export const Example = {
  render: () => ({
    template: `
      <div class="container AND grid grid--responsive-cols-4 gap--responsive">
        <div>
          <div class="ratio ratio--1/1">
            <div>ratio--1/1</div>
          </div>
        </div>

        <div>
          <div class="ratio ratio--4/3">
            <div>ratio--4/3</div>
          </div>
        </div>

        <div>
          <div class="ratio ratio--16/9">
            <div>ratio--16/9</div>
          </div>
        </div>

        <div>
          <div class="ratio ratio--2/1">
            <div>ratio--2/1</div>
          </div>
        </div>
      </div>`,
  }),
}
