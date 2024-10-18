export default {
  title: 'Layouts/Containers',
}

export const ContainerExample = {
  render: () => ({
    template: `
      <section class="section section--default">
        <div class="container">
          <div>
            Container with horizontal padding and limited width on large viewport
          </div>
        </div>
      </section>`,
  }),
}

export const ConsecutiveContainers = {
  render: () => ({
    template: `
      <section class="section section--default">
        <div class="container">
          <div>Section with consecutive containers. Container 1.</div>
        </div>

        <div class="container">
          <div>Section with consecutive containers. Container 2. Padding top is added.</div>
        </div>
      </section>`,
  }),
}

export const ContainerFlexbox = {
  render: () => ({
    template: `
      <section>
        <div class="container container--flex">
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </div>
      </section>`,
  }),
}

export const CenteredSubContainers = {
  render: () => ({
    template: `
      <section>
        <div class="container container--grid gap--responsive">
          <div class="container__full">container\_\_full</div>
          <div class="container__center--md">container\_\_center--md</div>
          <div class="container__center--sm">container\_\_center--sm</div>
          <div class="container__center--xs">container\_\_center--xs</div>
        </div>
      </section>`,
  }),
}

export const MainAsideSubContainers = {
  render: (args) => ({
    template: `
      <section>
        <div class="container container--grid ${args.extraClasses} gap--responsive">
          <div class="container__main">container\_\_main</div>
          <div class="container__aside">container\_\_aside</div>
        </div>
      </section>`,
  }),
  args: {
    extraClasses: '', // 'container--reverse', 'container--reverse-mobile'
  },
}

export const MainAsideSubContainersReverse = {
  ...MainAsideSubContainers,
  args: {
    extraClasses: 'container--reverse',
  },
}

export const MainAsideSubContainersReverseMobile = {
  ...MainAsideSubContainers,
  args: {
    extraClasses: 'container--reverse-mobile',
  },
}
