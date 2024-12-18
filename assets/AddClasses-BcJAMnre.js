import{ae as e,af as i}from"./index-DqHKKD8O.js";import{u as o}from"./index--EQfqK_b.js";import"./iframe-CWXQAp_Y.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Doc for developers/Add CSS classes"}),`
`,e.jsx(n.h1,{id:"add-tailwind-classes",children:"Add Tailwind classes"}),`
`,e.jsxs(n.p,{children:["This project is based on Tailwind CSS and the ",e.jsx(n.code,{children:"JIT"})," mode is activated. Per default a minimal amount of classes are generated. You may want to add additional Tailwind classes to your project, to create a specific custom grid, or a new component for example. Two options:"]}),`
`,e.jsx(n.h2,{id:"a-create-your-own-vue-component",children:"A. Create your own Vue component"}),`
`,e.jsxs(n.p,{children:["You can create a new vue component in the ",e.jsx(n.code,{children:"./app/components/ch/"})," folder. If you use official Tailwind classes, they won't be purged and put in the final CSS file. Run ",e.jsx(n.code,{children:"npm run build-css"})," to generate the desired ",e.jsx(n.code,{children:"dist/main.css"})," file."]}),`
`,e.jsx(n.p,{children:"If you want to use non Tailwind class names, you have to insert them in the postcss file structure."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["run ",e.jsx(n.code,{children:"npm run:dev"})," to launch the application or"]}),`
`,e.jsxs(n.li,{children:["run ",e.jsx(n.code,{children:"npm run:storybook"}),`to test your new component
Adapt the `,e.jsx(n.code,{children:"./css/"})," folder and be sure to respect the ",e.jsx(n.a,{href:"http://getbem.com/",rel:"nofollow",children:"BEM nomenclature"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"b-safelist-your-classes",children:"B. Safelist your classes"}),`
`,e.jsxs(n.p,{children:["You can write manually the missing Tailwind classes in the ",e.jsx(n.code,{children:"./safelist.txt"})," file. This way, the classes won't be purged. Then run ",e.jsx(n.code,{children:"npm run build-css"}),"to generate the desired ",e.jsx(n.code,{children:"dist/main.css"})," file."]})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
