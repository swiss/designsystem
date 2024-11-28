import{ae as n,af as c,ai as i}from"./index-DR98ZGbI.js";import{u as l}from"./index-yllvGTu_.js";import{Example as t,SpinningIcon as h}from"./Icons.stories-DLsFm4Dc.js";import"./iframe-C2Vmr2o1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./SvgIcon-BvWLCUtE.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Foundations/Icons/Implementation"}),`
`,n.jsx(e.h1,{id:"svg-icons",children:"Svg Icons"}),`
`,n.jsx(e.p,{children:"We recommend to use inline svg's or svg symbols to avoid http requests and to give the ability to style svg strokes and fills through css"}),`
`,n.jsx(e.h2,{id:"inline-svg-example",children:"Inline Svg example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon--4xl "
>
  <path
    xmlns="http://www.w3.org/2000/svg"
    d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"
  />
</svg>
`})}),`
`,n.jsx(e.h2,{id:"svg-symbols-example",children:"Svg symbols example"}),`
`,n.jsxs(e.p,{children:["Another way to load svg icons is to define ",n.jsx(e.code,{children:"<symbol>"})," elements in a hidden ",n.jsx(e.code,{children:"<svg>"})," in the top of the page, right after the ",n.jsx(e.code,{children:"<body>"})," element. Then you can call icons with the help of ",n.jsx(e.code,{children:"<use>"}),` element.
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol",rel:"nofollow",children:"More infos about svg symbols"})]}),`
`,n.jsx(e.h3,{id:"setup-symbols",children:"Setup symbols"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="ArrowRight" viewBox="0 0 24 24">
    <!-- <path>s and whatever other shapes in here -->
  </symbol>

  <symbol id="ArrowLeft" viewBox="0 0 24 24">
    <!-- <path>s and whatever other shapes in here -->
  </symbol>
</svg>
`})}),`
`,n.jsx(e.h3,{id:"insert-icon",children:"Insert Icon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<svg class="icon icon--base">
  <use xlink:href="#ArrowRight" />
</svg>
`})}),`
`,n.jsx(e.h2,{id:"icon-sizes",children:"Icon sizes"}),`
`,n.jsx(e.p,{children:"Use the following classes to set the size of the icon:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--sm"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--base"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--md"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--lg"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--2xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--3xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--4xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"icon--5xl"})}),`
`]}),`
`,n.jsx(i,{of:t}),`
`,n.jsxs(e.p,{children:["If you want to control the width of an icon with its parent container, use the ",n.jsx(e.code,{children:"icon--full"})," class."]}),`
`,n.jsx(e.h2,{id:"spinning-icon",children:"Spinning Icon"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"icon--spin"})," class to spin an icon."]}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<svg viewBox="0 0 24 24" class="icon icon--3xl icon--spin">
  <path
    d="m12 3.7v.8c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5c0-2.1.8-3.9 2.2-5.3l-.6-.6c-1.5 1.5-2.4 3.6-2.4 5.9 0 4.6 3.7 8.3 8.3 8.3s8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3z"
  ></path>
</svg>
`})})]})}function f(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{f as default};
