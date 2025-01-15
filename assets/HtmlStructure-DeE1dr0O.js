import{ae as e,af as s}from"./index-CRCv514t.js";import{u as a}from"./index-CjEIJkYx.js";import"./iframe-BRY8OVk8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";const o=""+new URL("html-structure-Bz3mu_x8.png",import.meta.url).href;function t(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Doc for developers/HTML Structure"}),`
`,e.jsx(n.h1,{id:"global-html-structure",children:"Global HTML structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body>
  <header id="main-header">
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    <div class="top-bar" />
    <div class="top-header" />
    <div class="desktop-menu" />
    <div class="mobile-menu" />
    <div class="breadcrumb" />
  </header>
  <main id="main-content">
    <section class="container">
      <!-- content with max width here -->
    </section>
    <section>
      <!-- full width content here -->
    </section>
  </main>
  <footer id="main-footer">
    <div class="container">
      <!-- footer content here -->
    </div>
  </footer>
</body>
`})}),`
`,e.jsx(n.h1,{id:"navigations-overview",children:"Navigations overview"}),`
`,e.jsx(n.p,{children:"Let's have a closer look at the main header:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<header id="main-header">
  <a href="#main-content" class="skip-to-content">Skip to main content</a>
  <div class="top-bar" />
  <div class="top-header" />
  <div class="desktop-menu" />
  <div class="mobile-menu" />
  <div class="breadcrumb" />
</header>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:".skip-to-content"})," is a hidden link appearing only when ",e.jsx(n.code,{children:"TAB"})," key is hit. It helps to reach faster the content during keyboard navigation."]}),`
`,e.jsx(n.p,{children:"The three next blocks contain each a navigation in the desktop context:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".top-bar"})," contains the ",e.jsx(n.code,{children:".top-bar-navigation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".top-header"})," contains the ",e.jsx(n.code,{children:".meta-navigation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".desktop-menu"})," contains the ",e.jsx(n.code,{children:".main-navigation"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["In a mobile context though, these three navigations are all regrouped in the ",e.jsx(n.code,{children:".mobile-menu"})," container."]}),`
`,e.jsxs(n.p,{children:["Regarding the implementation approach, the content of the navigations may be duplicated in the ",e.jsx(n.code,{children:".mobile-menu"})," container. A better approach would be to swap their positions between the mobile-menu and their desktop containers."]}),`
`,e.jsx(n.p,{children:"Below a schema to explain how these navigations are displayed in the header depending on the context:"}),`
`,e.jsx("img",{src:o}),`
`,e.jsx(n.h1,{id:"main-navigation-tree",children:"Main navigation tree"}),`
`,e.jsxs(n.p,{children:["As we can see above, the main The ",e.jsx(n.code,{children:"<MainNavigation />"})," is injected in two separate places, but it's html structure remains the same:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav aria-label="Main" class="main-navigation">
  <ul>
    <!-- list of <li> -->
  </ul>
</nav>
`})}),`
`,e.jsxs(n.p,{children:["Inside this navigation, ",e.jsx(n.code,{children:"<li>"})," elements can have two aspects, regarding if they have children or not:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<li>
  <a href="#"> Menu item without children </a>
</li>
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<li>
  <a role="button" class="navy__has-children">
    <span>Menu item with children</span>
    <svg class="icon icon--lg" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="#ArrowRight" />
    </svg>
  </a>
  <ul>
    <li>
      <a role="button" class="navy__back">
        <svg
          class="icon icon--lg"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use xlink:href="#ArrowLeft" />
        </svg>
        <span>Back</span>
      </a>
      <span class="navy__title">Menu item with children</span>
      <a href="#">Overview</a>
    </li>
    <!-- list of <li> children here -->
    <!-- reuse the same pattern recursively if child element has children too -->
  </ul>
</li>
`})})]})}function x(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{x as default};
