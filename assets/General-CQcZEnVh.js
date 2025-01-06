import{ae as n,af as c}from"./index-1ok-A262.js";import{u as s}from"./index-Jbkj_GC6.js";import"./iframe-C7igeh9B.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";function a(i){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Layouts/General"}),`
`,n.jsx(e.h1,{id:"sections-and-containers",children:"Sections and containers"}),`
`,n.jsxs(e.p,{children:["Schematically, a ",n.jsx(e.code,{children:"section"})," contains a ",n.jsx(e.code,{children:"container"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".section"})," manage the vertical spacing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".container"})," manage the horizontal spacing"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<main id="main-content">
  <section class="section">
    <div class="container">
      <!-- Content -->
    </div>
  </section>
</main>
`})}),`
`,n.jsxs(e.p,{children:["Apply the ",n.jsx(e.code,{children:"container--grid"})," variant to create a 12 cols grid container."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<main id="main-content">
  <section class="section">
    <div class="container container--grid">
      <div class="container__[variant]">
    </div>
  </section>
</main>
`})}),`
`,n.jsx(e.h1,{id:"complete-example-for-a-simple-section",children:"Complete example for a simple section"}),`
`,n.jsx(e.p,{children:"On the basis explained above, additional classes adjust the global layout of a section:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<main id="main-content">
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__center--xs">
        <!-- Content displayed in a tight and centered container -->
      </div>
      <div class="container__center--md">
        <div class="grid grid--responsive-cols-2 gap--responsive">
          <!-- Content on 2 columns, in a medium and centered container -->
        </div>
      </div>
    </div>
  </section>
</main>
`})}),`
`,n.jsxs(e.p,{children:["Check the complete example of a ",n.jsx("a",{href:"?path=/docs/pages-detail-page-simple--example",children:"Simple page"})]}),`
`,n.jsx(e.h1,{id:"example-for-a-main--aside-section",children:"Example for a main + aside section"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<main id="main-content">
  <section class="section section--default">
    <div class="container container--grid gap--responsive">
      <div class="container__main">
        <!-- Main content, displayed in a left aligned container--grid -->
      </div>
      <div class="container__aside">
        <!-- Aside content, displayed in a right aligned container--grid -->
      </div>
    </div>
  </section>
</main>
`})}),`
`,n.jsxs(e.p,{children:["Check the complete example of a ",n.jsx("a",{href:"?path=/docs/pages-detail-page-complex--example",children:"Complex page"})]})]})}function x(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{x as default};
