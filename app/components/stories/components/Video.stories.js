export default {
  title: 'Components/Video/Embed',
}

export const Example = {
  render: () => ({
    template: `<div class="container container--grid gap--responsive">
      <div class="container__center--xs">
        <h3 class="h3">4/3 video in a tight and centered container</h3>
        <figure>
          <div class="ratio ratio--4/3">
            <iframe width="1600" height="900" src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM" title="YouTube video player" frameborder="0" allowfullscreen />
          </div>
          <figcaption>Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal</figcaption>
        </figure>
      </div>
      <div class="container__center--md">
        <h3 class="h3">16/9 video in a medium and centered container</h3>
        <figure>
          <div class="ratio ratio--16/9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM" title="YouTube video player" frameborder="0" allowfullscreen />
          </div>
          <figcaption>Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal</figcaption>
        </figure>
      </div>
    </div>`,
  }),
}
