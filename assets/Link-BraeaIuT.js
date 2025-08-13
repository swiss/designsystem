import{j as n,M as o,C as s}from"./index-BG_muEQh.js";import{useMDXComponents as a}from"./index-Bnf8T58L.js";import{L as t,D as l,P as c,F as d,N as h,I as x,a as j}from"./Link.stories-DRHkSluO.js";import"./iframe-DyDqLT5X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:t}),`
`,n.jsx(e.h1,{id:"links",children:"Links"}),`
`,n.jsx(e.h2,{id:"default-links",children:"Default links"}),`
`,n.jsxs(e.p,{children:["Per default, ",n.jsx(e.code,{children:"<a>"})," links are not styled and shouldn't be used unstyled."]}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h2,{id:"links-in-paragraphs",children:"Links in paragraphs"}),`
`,n.jsxs(e.p,{children:["Links included in paragraphs in the main section (",n.jsx(e.code,{children:"main p a"}),") are styled though:"]}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h2,{id:"force-link-appearance",children:"Force Link appearance"}),`
`,n.jsxs(e.p,{children:["You can add a ",n.jsx(e.code,{children:".link"})," class to force the link appearance"]}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(e.h2,{id:"negative-links",children:"Negative links"}),`
`,n.jsx(s,{of:h,className:"storybook-bg-negative"}),`
`,n.jsx(e.h2,{id:"links-with-icons",children:"Links with icons"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:".btn btn--link"})," component and its variants to display a link with an icon."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," In this case, the additional icon for external links will be ignored."]}),`
`,n.jsx("a",{href:"?path=/docs/components-button--example#button-links",children:n.jsx(e.p,{children:"Read more about Button component"})}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h1,{id:"external-links",children:"External links"}),`
`,n.jsx(e.h2,{id:"links-in-new-windows-target_blank",children:'Links in new windows (target="_blank")'}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Generally, it is recommanded not to use links with ",n.jsx(e.code,{children:'target="_blank"'})]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["See argumentations on ",n.jsx(e.a,{href:"https://www.nngroup.com/articles/new-browser-windows-and-tabs/",rel:"nofollow",children:"Nielsen Norman Group"})," and ",n.jsx(e.a,{href:"https://css-tricks.com/use-target_blank/",rel:"nofollow",children:"CSS-Tricks"})]}),`
`,n.jsx(e.li,{children:"The main justified case for opening links in new windows is to avoid the user losing data (work, playing media, form data, etc) in the current window."}),`
`]}),`
`,n.jsx(e.h2,{id:"icon-for-external-text-links",children:"Icon for external text-links"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"The use of the external icon is justified in the following cases:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"the user goes to an other subdmain (xx.admin.ch -> yy.admin.ch)"}),`
`,n.jsx(e.li,{children:"the user completely leaves your domain (xx.admin.ch -> example.com)"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"To display the external icon, you have the following possibilities:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'<a href="..." rel="external"> Link <a>'})," (sementical way)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'<a href="..." class="link--external"> Link </a>'})," (forced way)"]}),`
`]}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"icon-for-external-cards",children:"Icon for external cards"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"The same rules apply for interactive cards as for text-links"}),`
You'll find a demo of a card with `,n.jsx(e.code,{children:"ExternalLink"})," in ",n.jsx(e.code,{children:"footerAction"})," ",n.jsx(e.a,{href:"?path=/docs/components-card--example",children:"on the card documentation"}),"."]})]})}function L(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{L as default};
