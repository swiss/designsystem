<template>
  <div class="tabs">
    <div class="tab__controls-container">
      <div class="tab__controls" role="tablist" aria-label="Additional Content">
        <button
          class="tab__control tab__control--active"
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="tab-1"
        >
          Large Title
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-2"
          tabindex="-1"
        >
          Even larger title which pushes content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-3"
          tabindex="-1"
        >
          Largest title pushing the entire content by a lot
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-4"
          tabindex="-1"
        >
          More long titles with additional data and content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-5"
          tabindex="-1"
        >
          Additional Site Information
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-6"
          tabindex="-1"
        >
          Bonus Content
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-7"
          tabindex="-1"
        >
          Bonus Content to show how very large titles go over the container
        </button>
      </div>
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-1"
      aria-labelledby="tab-1"
      class="tab__container"
    >
      <div>
        <ul class="download-items">
          <li>
            <a href="#" download="" class="download-item">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="download-item__icon icon icon--xl icon--Download"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m19.419 13.698-.375-.649-6.294 3.634v-12.228h-.75v12.228l-6.294-3.634-.375.649 7.044 4.067z"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m6.00576 19.91649h12.76855v.75h-12.76855z"
                ></path>
              </svg>
              <div>
                <h5 class="download-item__title">Instructions on isolation</h5>
                <p class="download-item__description">Description</p>
                <p class="download-item__meta-info meta-info">
                  <span class="meta-info__item"> PDF </span
                  ><span class="meta-info__item"> 13.01.2022 </span>
                </p>
              </div></a
            >
          </li>
          <li>
            <a href="#" download="" class="download-item">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="download-item__icon icon icon--xl icon--Download"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m19.419 13.698-.375-.649-6.294 3.634v-12.228h-.75v12.228l-6.294-3.634-.375.649 7.044 4.067z"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m6.00576 19.91649h12.76855v.75h-12.76855z"
                ></path>
              </svg>
              <div>
                <h5 class="download-item__title">
                  The Confederation’s measures to combat the coronavirus
                </h5>
                <p class="download-item__meta-info meta-info">
                  <span class="meta-info__item"> PDF </span
                  ><span class="meta-info__item"> 22.01.2022 </span>
                </p>
              </div></a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-2"
      aria-labelledby="tab-2"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 2</div>
    </div>

    <div
      tabindex="0"
      role="tabpanel"
      id="tab-3"
      aria-labelledby="tab-3"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 3</div>
    </div>
    <div
      tabindex="0"
      role="tabpanel"
      id="tab-4"
      aria-labelledby="tab-4"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 4</div>
    </div>
    <div
      tabindex="0"
      role="tabpanel"
      id="tab-5"
      aria-labelledby="tab-5"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 5</div>
    </div>
    <div
      tabindex="0"
      role="tabpanel"
      id="tab-6"
      aria-labelledby="tab-6"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 6</div>
    </div>
    <div
      tabindex="0"
      role="tabpanel"
      id="tab-7"
      aria-labelledby="tab-7"
      class="tab__container tab__container--is-hidden"
    >
      <div>Content 7</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsLarge',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['compact'].includes(prop),
    },
  },

  computed: {
    computedClasses() {
      let base = 'table '
      if (this.variant) base += `table--${this.variant} `
      return base
    },
  },
}
</script>
