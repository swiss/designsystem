export default {
  title: 'Sections/Content/DateBox',
}

export const UseCaseOneExampleOne = {
  render: () => ({
    template: `
      <div class="box">
        <h2 class="sr-only">Event Date</h2>

        <div class="date" lang="de">
          <div class="date__wrapper">
            <div class="date__day">10</div>
            <div class="date__month">Apr</div>
          </div>

          <div class="date__separator">–</div>

          <div class="date__wrapper">
            <div class="date__day">11</div>
            <div class="date__month">Apr</div>
            <div class="date__year">2023</div>
          </div>
        </div>

        <div class="hours">
          Friday 18:00 – 21:00<br />
          Saturday 10:00 – 17:00
        </div>
      </div>
    `,
  }),
}

export const UseCaseOneExampleTwo = {
  render: () => ({
    template: `
      <div class="box">
        <h2 class="sr-only">Event Date</h2>

        <div class="date" lang="de">
          <div class="date__wrapper">
            <div class="date__day">30</div>
            <div class="date__month">Dez.</div>
            <div class="date__year">2023</div>
          </div>

          <div class="date__separator">–</div>

          <div class="date__wrapper">
            <div class="date__day">1</div>
            <div class="date__month">Jan.</div>
            <div class="date__year">2024</div>
          </div>
        </div>

        <div class="hours">
          Thursday 18:00 – 21:00<br />
          Friday 18:00 – 02:00<br />
          Saturday 14:00 – 17:00
        </div>
      </div>
    `,
  }),
}

export const UseCaseTwo = {
  render: () => ({
    template: `
      <div class="box">
        <h2 class="sr-only">Event Date</h2>

        <div class="date" lang="de">
          <div class="date__wrapper">
            <div class="date__day">16</div>
            <div class="date__month">Apr</div>
            <div class="date__year">2023</div>
          </div>
        </div>

        <div class="hours">
          Friday 09:30 – 16:00
        </div>
      </div>
    `,
  }),
}

export const UseCaseThreeExampleOne = {
  render: () => ({
    template: `
      <div class="box">
        <h2 class="sr-only">Event Date</h2>

        <div class="date" lang="de">
          <div class="date__wrapper">
            <div class="date__day">16</div>
            <div class="date__month">Apr</div>
            <div class="date__year">2023</div>
          </div>
        </div>

        <div class="hours">
          Friday 09:30 – 16:00
        </div>
      </div>
    `,
  }),
}

export const UseCaseThreeExampleTwo = {
  render: () => ({
    template: `
      <div class="box">
        <h2 class="sr-only">Event Date</h2>

        <div class="date" lang="de">
          <div class="date__wrapper">
            <div class="date__day">23</div>
            <div class="date__month">Apr</div>
            <div class="date__year">2023</div>
          </div>
        </div>

        <div class="hours">
          Friday 09:30 – 16:00
        </div>
      </div>
    `,
  }),
}
