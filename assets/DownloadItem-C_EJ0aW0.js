import{j as e,M as s,C as o}from"./index-t992ZlYY.js";import{useMDXComponents as a}from"./index-ItJIzRJj.js";import{D as l,E as d,L as r}from"./DownloadItem.stories-vKL0cKu9.js";import"./iframe-CWspoYnI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./DownloadItem-BhhZ7p6y.js";import"./vue.esm-bundler-B8GkW3lv.js";import"./SvgIcon-DacSMykS.js";import"./MetaInfo-BfsCjQtf.js";import"./Btn-CQzPwLlm.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"downloaditem",children:"DownloadItem"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"list",children:"List"}),`
`,e.jsxs(n.p,{children:["Wrap multiple DownloadItems into ",e.jsx(n.code,{children:"ul.download-items li"}),` elements to display them as a list.
If you have a too large list (around 10 elements, depending on the content) you can use the `,e.jsx(n.code,{children:".button-bare"})," element as a clickable component to trigger a list expansion."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h1,{id:"interaction",children:"Interaction"}),`
`,e.jsx(n.p,{children:`Each DownloadItem item is it's own link, they can also be added within a list and their width is contained by the outer parent element.
During interactions, the DownloadItem items are highlighted and the user can click on them to trigger the download. The DownloadItem items are also accessible by tabbing through them.`}),`
`,e.jsx(n.h2,{id:"download-vs-navigation",children:"Download vs navigation"}),`
`,e.jsxs(n.p,{children:["If the DownloadItem item points to a document placed on the same server as the application, add the ",e.jsx(n.code,{children:"download"})," attribute on your link. This will download the document instead of opening it in the browser."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a download class="download-item" href="..url-to-your-document">
  <SvgIcon icon="Download" size="xl" class="download-item__icon" />
  <div>
    <h5 class="download-item__title">Title</h5>
    <p class="download-item__description">Optional description</p>
    <p class="meta-info">
      <span class="meta-info__item">meta-info 1</span>
      <span class="meta-info__item">meta-info 2</span>
    </p>
  </div>
</a>
`})}),`
`,e.jsx(n.p,{children:"If the DownloadItem item points to an external document, a JavaScript or backend approach has to be applied."}),`
`,e.jsxs(n.p,{children:["And if the cross-origin problematic can't be solved, add a ",e.jsx(n.code,{children:'target="_blank"'})," attribute on the link for a slightly better interaction."]}),`
`,e.jsx(n.h1,{id:"headings-and-accessibility",children:"Headings and accessibility"}),`
`,e.jsx(n.h2,{id:"downloaditem-title",children:"DownloadItem title"}),`
`,e.jsxs(n.p,{children:["Most of the time, the title of an DownloadItem can be considered as a heading and should be marked with a ",e.jsx(n.code,{children:"h2"}),", ",e.jsx(n.code,{children:"h3"})," or a ",e.jsx(n.code,{children:"h4"}),"."]}),`
`,e.jsxs(n.p,{children:["The heading level depends on the parent heading level and should respect the heading chain. For example, a ",e.jsx(n.code,{children:"h4"})," heading shouldn't follow a ",e.jsx(n.code,{children:"h2"})," title (use a ",e.jsx(n.code,{children:"h3"})," instead)."]}),`
`,e.jsxs(n.p,{children:["More informations about ",e.jsx(n.a,{href:"https://dequeuniversity.com/rules/axe/4.4/heading-order?application=axeAPI",rel:"nofollow",children:"why heading levels should only increase by one"}),"."]}),`
`,e.jsx(n.h2,{id:"rule-of-thumb",children:"Rule of thumb"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DownloadItem heading level = Parent title level + 1"})}),`
`,e.jsxs(n.p,{children:["If these rules can't be applied technically, for example in a complex migration process, the best option is to ",e.jsxs(n.strong,{children:["replace the heading by a ",e.jsx(n.code,{children:"div"})]}),". With this approach, the semantic of the titles is lost, but the content doesn't bring confusion for people using assistive technologies."]})]})}function D(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
