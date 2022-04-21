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
          Publications
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-2"
          tabindex="-1"
        >
          Events
        </button>
        <button
          class="tab__control"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="tab-3"
          tabindex="-1"
        >
          FAQ
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
        <ul>
          <li class="list--bare">
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
                <p class="meta-info">
                  <span class="meta-info__item"> PDF </span
                  ><span class="meta-info__item"> 13.01.2022 </span>
                </p>
              </div></a
            >
          </li>
          <li class="list--bare">
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
                <p class="meta-info">
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
  </div>
</template>

<script>
export default {
  name: 'Tabs',
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
