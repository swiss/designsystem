import SocialsSection from '../../ch/sections/SocialsSection.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SocialsSection },
  template:
    '<SocialsSection :section-title="sectionTitle" :section-desc="sectionDesc" :feeds="feeds" />',
})

export default {
  title: 'Sections/Content/Socials',
  component: SocialsSection,
}

export const ExampleWith1Card = {
  render: Template.bind({}),
  name: 'Example with 1 card',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
    ],
  },
}

export const ExampleWith2Cards = {
  render: Template.bind({}),
  name: 'Example with 2 cards',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
      {
        type: 'instagram',
        title: 'Insights on Instagram',
        pofileURL: 'https://www.instagram.com/swisstopo/',
        feedURL:
          'https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link',
      },
    ],
  },
}

export const ExampleWith3Cards = {
  render: Template.bind({}),
  name: 'Example with 3 cards',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
      {
        type: 'instagram',
        title: 'Insights on Instagram',
        pofileURL: 'https://www.instagram.com/swisstopo/',
        feedURL:
          'https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link',
      },
      {
        type: 'youtube',
        title: 'Investigations on Youtube',
        pofileURL: 'https://www.youtube.com/c/SwissGeoportal',
        feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
      },
    ],
  },
}

export const ExampleWith4Cards = {
  render: Template.bind({}),
  name: 'Example with 4 cards',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
      {
        type: 'instagram',
        title: 'Insights on Instagram',
        pofileURL: 'https://www.instagram.com/swisstopo/',
        feedURL:
          'https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link',
      },
      {
        type: 'youtube',
        title: 'Investigations on Youtube',
        pofileURL: 'https://www.youtube.com/c/SwissGeoportal',
        feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
      },
      {
        type: 'twitter',
        title: 'Press-resleases on Twitter',
        pofileURL: 'https://twitter.com/swiss_geoportal',
        feedURL:
          '<blockquote class="twitter-tweet"><p lang="de" dir="ltr">[DE] Erfahre alles über die Energie-/Wärmequelle (Leistung und Aktualisierungsdaten) der Heizung in Schweizer Gebäuden dank dem eidgenössischen Gebäude- und Wohnungsregister! <br>Karte: <a href="https://t.co/DuexdeRciJ">https://t.co/DuexdeRciJ</a><br>🔥🏠📊 <a href="https://twitter.com/hashtag/Energieeffizienz?src=hash&amp;ref_src=twsrc%5Etfw">#Energieeffizienz</a> <a href="https://twitter.com/hashtag/BFS?src=hash&amp;ref_src=twsrc%5Etfw">#BFS</a> <a href="https://twitter.com/hashtag/GWR?src=hash&amp;ref_src=twsrc%5Etfw">#GWR</a> <a href="https://twitter.com/StatSchweiz?ref_src=twsrc%5Etfw">@StatSchweiz</a> <a href="https://t.co/ofNwgPulhf">pic.twitter.com/ofNwgPulhf</a></p>&mdash; geo.admin.ch (@swiss_geoportal) <a href="https://twitter.com/swiss_geoportal/status/1636356390708219904?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote>',
      },
    ],
  },
}

export const ExampleWith5Cards = {
  render: Template.bind({}),
  name: 'Example with 5 cards',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
      {
        type: 'instagram',
        title: 'Insights on Instagram',
        pofileURL: 'https://www.instagram.com/swisstopo/',
        feedURL:
          'https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link',
      },
      {
        type: 'youtube',
        title: 'Investigations on Youtube',
        pofileURL: 'https://www.youtube.com/c/SwissGeoportal',
        feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
      },
      {
        type: 'twitter',
        title: 'Press-resleases on Twitter',
        pofileURL: 'https://twitter.com/swiss_geoportal',
        feedURL:
          '<blockquote class="twitter-tweet"><p lang="de" dir="ltr">[DE] Erfahre alles über die Energie-/Wärmequelle (Leistung und Aktualisierungsdaten) der Heizung in Schweizer Gebäuden dank dem eidgenössischen Gebäude- und Wohnungsregister! <br>Karte: <a href="https://t.co/DuexdeRciJ">https://t.co/DuexdeRciJ</a><br>🔥🏠📊 <a href="https://twitter.com/hashtag/Energieeffizienz?src=hash&amp;ref_src=twsrc%5Etfw">#Energieeffizienz</a> <a href="https://twitter.com/hashtag/BFS?src=hash&amp;ref_src=twsrc%5Etfw">#BFS</a> <a href="https://twitter.com/hashtag/GWR?src=hash&amp;ref_src=twsrc%5Etfw">#GWR</a> <a href="https://twitter.com/StatSchweiz?ref_src=twsrc%5Etfw">@StatSchweiz</a> <a href="https://t.co/ofNwgPulhf">pic.twitter.com/ofNwgPulhf</a></p>&mdash; geo.admin.ch (@swiss_geoportal) <a href="https://twitter.com/swiss_geoportal/status/1636356390708219904?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote>',
      },
      {
        type: 'linkedIn',
        title: 'Post on LinkedIn',
        pofileURL: 'https://www.linkedin.com/company/swisstopo/',
        feedURL: 'https://www.linkedin.com/company/swisstopo/',
      },
    ],
  },
}

export const ExampleWith6Cards = {
  render: Template.bind({}),
  name: 'Example with 6 cards',

  args: {
    sectionTitle: 'Geoportal in den sozialen Medien',
    sectionDesc:
      'Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.',

    feeds: [
      {
        type: 'facebook',
        title: 'News on Facebook',
        pofileURL: 'https://www.facebook.com/swisstopo',
        feedURL: 'https://www.facebook.com/swisstopo/videos/5455503121148000/',
      },
      {
        type: 'instagram',
        title: 'Insights on Instagram',
        pofileURL: 'https://www.instagram.com/swisstopo/',
        feedURL:
          'https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link',
      },
      {
        type: 'youtube',
        title: 'Investigations on Youtube',
        pofileURL: 'https://www.youtube.com/c/SwissGeoportal',
        feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
      },
      {
        type: 'twitter',
        title: 'Press-resleases on Twitter',
        pofileURL: 'https://twitter.com/swiss_geoportal',
        feedURL:
          '<blockquote class="twitter-tweet"><p lang="de" dir="ltr">[DE] Erfahre alles über die Energie-/Wärmequelle (Leistung und Aktualisierungsdaten) der Heizung in Schweizer Gebäuden dank dem eidgenössischen Gebäude- und Wohnungsregister! <br>Karte: <a href="https://t.co/DuexdeRciJ">https://t.co/DuexdeRciJ</a><br>🔥🏠📊 <a href="https://twitter.com/hashtag/Energieeffizienz?src=hash&amp;ref_src=twsrc%5Etfw">#Energieeffizienz</a> <a href="https://twitter.com/hashtag/BFS?src=hash&amp;ref_src=twsrc%5Etfw">#BFS</a> <a href="https://twitter.com/hashtag/GWR?src=hash&amp;ref_src=twsrc%5Etfw">#GWR</a> <a href="https://twitter.com/StatSchweiz?ref_src=twsrc%5Etfw">@StatSchweiz</a> <a href="https://t.co/ofNwgPulhf">pic.twitter.com/ofNwgPulhf</a></p>&mdash; geo.admin.ch (@swiss_geoportal) <a href="https://twitter.com/swiss_geoportal/status/1636356390708219904?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote>',
      },
      {
        type: 'twitter',
        title: 'Press-releases on Twitter',
        pofileURL: 'https://twitter.com/swiss_geoportal',
        feedURL:
          '<blockquote class="twitter-tweet"><p lang="de" dir="ltr">[DE] Erfahre alles über die Energie-/Wärmequelle (Leistung und Aktualisierungsdaten) der Heizung in Schweizer Gebäuden dank dem eidgenössischen Gebäude- und Wohnungsregister! <br>Karte: <a href="https://t.co/DuexdeRciJ">https://t.co/DuexdeRciJ</a><br>🔥🏠📊 <a href="https://twitter.com/hashtag/Energieeffizienz?src=hash&amp;ref_src=twsrc%5Etfw">#Energieeffizienz</a> <a href="https://twitter.com/hashtag/BFS?src=hash&amp;ref_src=twsrc%5Etfw">#BFS</a> <a href="https://twitter.com/hashtag/GWR?src=hash&amp;ref_src=twsrc%5Etfw">#GWR</a> <a href="https://twitter.com/StatSchweiz?ref_src=twsrc%5Etfw">@StatSchweiz</a> <a href="https://t.co/ofNwgPulhf">pic.twitter.com/ofNwgPulhf</a></p>&mdash; geo.admin.ch (@swiss_geoportal) <a href="https://twitter.com/swiss_geoportal/status/1636356390708219904?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote>',
      },
      {
        type: 'linkedIn',
        title: 'Post on LinkedIn',
        pofileURL: 'https://www.linkedin.com/company/swisstopo/',
        feedURL: 'https://www.linkedin.com/company/swisstopo/',
      },
    ],
  },
}
