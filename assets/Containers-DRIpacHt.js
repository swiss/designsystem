import{j as e,M as c,C as i}from"./index-B9H_Fiyr.js";import{useMDXComponents as t}from"./index-COljEU0r.js";import{C as r,a,b as d,c as l,d as h,M as p,e as x,f as m}from"./Containers.stories-C5eOSuXv.js";import"./iframe-DyLTWKTg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(n.h1,{id:"containers",children:"Containers"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".container"})," classes and its variants give a structured horizontal constraint to the content. Depending of the viewport, it combines maximal width and horizontal paddings to define content's width in a coherent way."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".container"})," is frequently a child of a ",e.jsx(n.code,{children:".section"})," element."]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-container",of:a}),`
`,e.jsx(n.h1,{id:"consecutive-containers",children:"Consecutive Containers"}),`
`,e.jsxs(n.p,{children:["Consecutive ",e.jsx(n.code,{children:".container"})," elements adds a top padding to the second container."]}),`
`,e.jsxs(n.p,{children:["The gap between two consecutive containers will be identical to the gap between two consecutive sections. Check the ",e.jsx(n.a,{href:"/docs/layouts-sections--page",children:"Section"})," documentation for more details."]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-container",of:d}),`
`,e.jsx(n.h1,{id:"container-with-flexbox",children:"Container with flexbox"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container--flex"})," displays its content horizontally"]}),`
`]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-container",of:l}),`
`,e.jsx(n.h1,{id:"container-with-12-cols-grid",children:"Container with 12 cols grid"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".container--grid"})," creates a 12 columns CSS grid. It defines the main layout within a strict but flexible structure."]}),`
`,e.jsx(n.h2,{id:"centered-sub-containers",children:"Centered sub-containers"}),`
`,e.jsxs(n.p,{children:["Use the following classes for ",e.jsx(n.code,{children:"container--grid"})," children:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__full"})," fullfills the 12 columns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__center--md"})," fills 10 columns on large viewports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__center--sm"})," fills 8 columns on large viewports"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__center--xs"})," fills 6 columns on large viewports"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Additionally, a ",e.jsx(n.code,{children:"gap--responsive"})," class applies default spacings between grid items."]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-grid",of:h}),`
`,e.jsx(n.h2,{id:"main-and-aside-sub-containers",children:"Main and Aside sub-containers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__main"})," is left aligned per default, use it in combination with ",e.jsx(n.code,{children:"container__aside"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container__aside"})," is right aligned per default"]}),`
`]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-grid",of:p}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"container--grid container--reverse"})," on the parent to swap the columns ",e.jsx(n.code,{children:"container__main"})," and ",e.jsx(n.code,{children:"container__aside"})," on desktop viewports only."]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-grid",of:x}),`
`,e.jsxs(n.p,{children:["use ",e.jsx(n.code,{children:"container--grid container--reverse-mobile"})," on the parent to swap ",e.jsx(n.code,{children:"container__main"})," and ",e.jsx(n.code,{children:"container__aside"}),` on mobile viewports only.
Use it when the aside content contains anchor links for example. This will display them before the main content on mobile viewports.`]}),`
`,e.jsx(i,{className:"storybook-demo-grid storybook-show-grid",of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"homepage-and-hub-pages-structure",children:"Homepage and hub pages structure"}),`
`,e.jsxs(n.p,{children:["The default full width of ",e.jsx(n.code,{children:"container"})," is used for hub pages and homepage. It's generallay populated with Card displayed on a grid."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<main id="main-content">
  <Hero />
  <section class="section bg--secondary-50">
    <div class="container">
      <h2 class="section__title">Section title</h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <!-- Content here, for example 3 column card list on gray background -->
      </div>
    </div>
  </section>

  <section class="section section--default">
    <div class="container">
      <h2 class="section__title">Section title</h2>
      <div class="grid grid--responsive-cols-2 gap--responsive">
        <!-- Content here, for example 2 columns card list on white background -->
      </div>
    </div>
  </section>
</main>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"?path=/docs/pages-homepage--example",children:"Homepage complete example"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"?path=/docs/pages-hub-page--example",children:"Hub page complete example"}),`
`]}),`
`]}),`
`,e.jsx(n.h1,{id:"default-page-structure",children:"Default page structure"}),`
`,e.jsxs(n.p,{children:["Default page's content is mainly displayed into a ",e.jsx(n.code,{children:"container__center--xs"})," sub-container."]}),`
`,e.jsxs(n.p,{children:["We can give a visual rythm to the page by inserting text-image blocks in a broader ",e.jsx(n.code,{children:"container__center--sm"})," or ",e.jsx(n.code,{children:"container__center--md"})," container, and then continue the content flow into a ",e.jsx(n.code,{children:"container__center--xs"})," container again."]}),`
`,e.jsx(n.p,{children:"Consecutive sections with different full width backgrounds will give visual rythm too, for example the quote section:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<main id="main-content">
  <Hero />
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs">
        <!-- Content flow here -->
      </div>
      <div class="container__center--sm">
        <div class="grid grid--responsive-cols-1/4-3/4 gap--responsive">
          <!-- visual break with image left and text right, the container is broader -->
        </div>
      </div>
      <div class="container__center--xs">
        <!-- Content flow continues here -->
      </div>
    </div>
  </section>

  <QuoteSection>
    <!-- visual break here, the quote takes the whole screen width -->
  </QuoteSection>

  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs">
        <!-- Content flow continues here -->
      </div>
    </div>
  </section>
</main>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"?path=/docs/pages-detail-page-simple--example",children:"Default page complete example"}),`
`]}),`
`]}),`
`,e.jsx(n.h1,{id:"complex-page-structure",children:"Complex page structure"}),`
`,e.jsxs(n.p,{children:["Complex page's main content can be displayed into a ",e.jsx(n.code,{children:"container__main"})," sub-container, and side content can be displayed into a ",e.jsx(n.code,{children:"container__aside"}),` sub-container.
Then, the content can be rythmed by consecutive sections with different backgrounds, and different rythms for text-image displays. A broader freedom should be possible while building these pages.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<main id="main-content">
  <Hero />
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__main">
        <!-- Main content flow here -->
      </div>
      <div class="container__aside">
        <!-- Side content flow here -->
      </div>
    </div>
  </section>

  <QuoteSection>
    <!-- visual break here, the quote takes the whole screen width -->
  </QuoteSection>

  <section class="section section--default">
    <div class="container">
      <div class="grid grid--responsive-cols-2 gap--responsive">
        <!-- Content here, for example 2 columns text-image block on white background -->
      </div>
    </div>
  </section>

  <section class="section bg--secondary-50">
    <div class="container">
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <!-- Content here, for example 3 columns card list on gray background -->
      </div>
    </div>
  </section>
</main>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"?path=/docs/pages-detail-page-complex--example",children:"Complex page complete example"}),`
`]}),`
`]})]})}function _(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{_ as default};
