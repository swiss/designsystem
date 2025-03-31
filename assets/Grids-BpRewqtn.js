import{j as s,M as d,C as i}from"./index-BftOfPg6.js";import{useMDXComponents as n}from"./index-AxR9c3o8.js";import{OneCol as l,TwoCols as c,ThreeCols as a,FourCols as t,Quarters1_3 as h,Quarters1_3_Reversed as m,Quarters3_1 as g,Quarters3_1_Reversed as p,Thirds1_2 as x,Thirds1_2_Reversed as j,Thirds2_1 as f,Thirds2_1_Reversed as u,Halves1_1 as v,Halves1_1_Reversed as y,GridsNItems1 as b,GridsNItems2 as w,GridsNItems3 as N,GridsNItems4 as k,GridsNItems5 as _}from"./Grids.stories-C-9O7qE7.js";import"./iframe-Dbx2hYdo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";const C=""+new URL("grid-example-1-BxMgA95T.png",import.meta.url).href,T=""+new URL("grid-example-2-qzb2GsKL.png",import.meta.url).href,R=""+new URL("grid-example-3-CBbBIh-Y.png",import.meta.url).href;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Layouts/Grids"}),`
`,s.jsx(e.h1,{id:"grids",children:"Grids"}),`
`,s.jsx(e.p,{children:"Three types of grids are at your disposal: Default grids, Asymmetric grids and Custom grids."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:".grid"})," is frequently a child of a ",s.jsx(e.code,{children:".container"})," or a ",s.jsx(e.code,{children:".container__[child]"})," element."]}),`
`,s.jsx(e.h1,{id:"responsive-grids",children:"Responsive Grids"}),`
`,s.jsx(e.p,{children:"Responsive grids propose standard alignments and default responsiveness with a minimal amount of CSS (classes are defined only on the parent)."}),`
`,s.jsxs(e.p,{children:["Ideal to align content in a ",s.jsx(e.code,{children:"container"}),", for example a list of Card elements."]}),`
`,s.jsx(e.p,{children:"Use the following classes:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-1"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-2"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-3"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-4"})}),`
`]}),`
`,s.jsxs(e.p,{children:["Additionally, a ",s.jsx(e.code,{children:"gap--responsive"})," class applies default spacings between elements."]}),`
`,s.jsx(e.h2,{id:"responsive-grid-one-col",children:"Responsive grid, one col"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:l}),`
`,s.jsx(e.h2,{id:"responsive-grid-two-cols",children:"Responsive grid, two cols"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:c}),`
`,s.jsx(e.h2,{id:"responsive-grid-three-cols",children:"Responsive grid, three cols"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:a}),`
`,s.jsx(e.h2,{id:"responsive-grid-four-cols",children:"Responsive grid, four cols"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:t}),`
`,s.jsx(e.h1,{id:"asymmetric-grids",children:"Asymmetric Grids"}),`
`,s.jsx(e.p,{children:"Asymmetric grids are responsive grids, but the columns have differentiated widths. This can be used to display images and content on two cols."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-1/4-3/4"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-3/4-1/4"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-1/3-2/3"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"grid grid--responsive-cols-2/3-1/3"})}),`
`]}),`
`,s.jsxs(e.p,{children:["An additional ",s.jsx(e.code,{children:"grid grid--reverse"})," class helps you to flip right and left columns"]}),`
`,s.jsx(e.h2,{id:"quarters",children:"Quarters"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:h}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:m}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:g}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:p}),`
`,s.jsx(e.h2,{id:"thirds",children:"Thirds"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:x}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:j}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:f}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:u}),`
`,s.jsx(e.h2,{id:"halves",children:"Halves"}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:v}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:y}),`
`,s.jsx(e.h2,{id:"grids-with-n-items",children:"Grids with n items."}),`
`,s.jsx(e.p,{children:"Specific grid definitions depending on the number of items can be used, typically for displaying cards in a section."}),`
`,s.jsxs(e.p,{children:["The numbers of items can vary from 1 to 5. For 6 or more items, use the ",s.jsx(e.code,{children:"grid--responsive-cols-3"})," variant."]}),`
`,s.jsxs(e.p,{children:["Further informations about Cards and grids on the ",s.jsx(e.a,{href:"?path=/docs/components-card-cards-and-grids--one-card",children:"Card documentation page"}),"."]}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:b}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:w}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:N}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:k}),`
`,s.jsx(i,{className:"storybook-demo-grid",of:_}),`
`,s.jsx(e.h1,{id:"custom-grids",children:"Custom Grids"}),`
`,s.jsxs(e.p,{children:["You can use most of ",s.jsx(e.a,{href:"https://tailwindcss.com/docs/grid-template-columns",rel:"nofollow",children:"Tailwind grid classes"})," to display your elements in a more specific way. You will have create a template in this project with the new classes or safelist the desired Tailwind classes, and to build the css file again."]}),`
`,s.jsx("a",{href:"?path=/docs/doc-for-developers-add-css-classes--page",children:s.jsx(e.p,{children:"More informations about adding Tailwind classes"})}),`
`,s.jsx(e.h2,{id:"example-of-a-custom-responsive-grid",children:"Example of a custom responsive grid"}),`
`,s.jsx(e.p,{children:"The following html strucuture will display 1 column on mobile, 3 columns on tablet and 5 columns on desktop, with a complex cell display."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<div class="grid md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-5 gap-3 md:gap-5">
  <div class="lg:row-span-2">1</div>
  <div>2</div>
  <div class="lg:col-span-3">3</div>
  <div class="lg:col-span-3">4</div>
  <div class="md:col-span-2 lg:col-span-1">5</div>
</div>
`})}),`
`,s.jsx(e.p,{children:"Here are visual examples of the grid above:"}),`
`,`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Mobile view"})}),`
`,s.jsx("img",{src:C,width:"40%"}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Tablet view"})}),`
`,s.jsx("img",{src:T,width:"60%"}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Mobile desktop"})}),`
`,s.jsx("img",{src:R})]})}function H(r={}){const{wrapper:e}={...n(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(o,{...r})}):o(r)}export{H as default};
