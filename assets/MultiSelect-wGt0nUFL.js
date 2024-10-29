import{ae as e,af as c,ag as i,ah as r}from"./index-CiR8XFvN.js";import{u as l}from"./index-CqrWAbSl.js";import{M as d,E as o}from"./MultiSelect.stories-COQBGNVX.js";import"./iframe-C_6v4lE6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./v4-DvF23Exx.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(n.h2,{id:"general",children:"General"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A multi select component is complex to style and customize without using a library. In this style guide, we use ",e.jsx(n.a,{href:"https://vue-select.org/",rel:"nofollow",children:"Vue Select"})," to handle the logic and style of the select. Vue 2 and 3 are supported. To avoid a pollution of the CSS with Vue-only styles for other frameworks, all CSS definitions are scoped to the demo Vue component."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MultiSelect"})," component is a wrapper around the ",e.jsx(n.code,{children:"Vue Select"})," component."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If you define the ",e.jsx(n.code,{children:"multiple"})," prop to false, you can use this component instead of the standard ",e.jsx(n.code,{children:"Select"})," component."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h2,{id:"install-vue-select",children:"Install Vue Select"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install vue-select@beta
`})}),`
`,e.jsx(n.h2,{id:"overwrite-vue-select-child-components",children:"Overwrite Vue Select child components"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Deselect"})," button and the ",e.jsx(n.code,{children:"Openindicator"})," are two child components of the ",e.jsx(n.code,{children:"Vue Select"})," component. You can overwrite them to match the style guide with the help of the following props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vSelect :components="{Deselect, OpenIndicator}" ... />
`})}),`
`,e.jsxs(n.p,{children:["and render directly the child components in the ",e.jsx(n.code,{children:"data"})," function:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup lang="ts">
  import { h } from 'vue'
  const Deselect = { render: () => h('span', '×') }
  const OpenIndicator = { render: () => h('span') } // replace the default icon
<\/script>
`})})]})}function v(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{v as default};
