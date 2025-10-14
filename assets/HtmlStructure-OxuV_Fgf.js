import{j as n,M as s}from"./index-B9H_Fiyr.js";import{useMDXComponents as a}from"./index-COljEU0r.js";import"./iframe-DyLTWKTg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";const o=""+new URL("html-structure-Bz3mu_x8.png",import.meta.url).href;function t(i){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Doc for developers/HTML Structure"}),`
`,n.jsx(e.h1,{id:"global-html-structure",children:"Global HTML structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<body>
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
`,n.jsx(e.h1,{id:"navigations-overview",children:"Navigations overview"}),`
`,n.jsx(e.p,{children:"Let's have a closer look at the main header:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<header id="main-header">
  <a href="#main-content" class="skip-to-content">Skip to main content</a>
  <div class="top-bar" />
  <div class="top-header" />
  <div class="desktop-menu" />
  <div class="mobile-menu" />
  <div class="breadcrumb" />
</header>
`})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:".skip-to-content"})," is a hidden link appearing only when ",n.jsx(e.code,{children:"TAB"})," key is hit. It helps to reach faster the content during keyboard navigation."]}),`
`,n.jsx(e.p,{children:"The three next blocks contain each a navigation in the desktop context:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".top-bar"})," contains the ",n.jsx(e.code,{children:".top-bar-navigation"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".top-header"})," contains the ",n.jsx(e.code,{children:".meta-navigation"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".desktop-menu"})," contains the ",n.jsx(e.code,{children:".main-navigation"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["In a mobile context though, these three navigations are all regrouped in the ",n.jsx(e.code,{children:".mobile-menu"})," container."]}),`
`,n.jsxs(e.p,{children:["Regarding the implementation approach, the content of the navigations may be duplicated in the ",n.jsx(e.code,{children:".mobile-menu"})," container. A better approach would be to swap their positions between the mobile-menu and their desktop containers."]}),`
`,n.jsx(e.p,{children:"Below a schema to explain how these navigations are displayed in the header depending on the context:"}),`
`,n.jsx("img",{src:o}),`
`,n.jsx(e.h1,{id:"main-navigation-tree",children:"Main navigation tree"}),`
`,n.jsxs(e.p,{children:["As we can see above, the main The ",n.jsx(e.code,{children:"<MainNavigation />"})," is injected in two separate places, but it's html structure remains the same:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<nav aria-label="Main" class="main-navigation">
  <ul>
    <!-- list of <li> -->
  </ul>
</nav>
`})}),`
`,n.jsxs(e.p,{children:["Inside this navigation, ",n.jsx(e.code,{children:"<li>"})," elements can have two aspects, regarding if they have children or not:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<li>
  <a href="#"> Menu item without children </a>
</li>
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<li>
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
`})})]})}function p(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{p as default};
