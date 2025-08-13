import{j as e,M as i,C as a}from"./index-JFBnKOEh.js";import{useMDXComponents as s}from"./index-C8RUrere.js";import{V as r,E as c}from"./VideoCaptions.stories-CEY8E2mv.js";import"./iframe-7HqaUV9t.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r}),`
`,e.jsx(o.h1,{id:"video-captions",children:"Video captions"}),`
`,e.jsxs(o.p,{children:["If you host the video yourself and you have a ",e.jsx(o.code,{children:".vtt"})," file to describe the video captions, use the ",e.jsx(o.code,{children:"track"})," element to add them. More informations about the ",e.jsx(o.a,{href:"https://www.w3.org/TR/webvtt1/",rel:"nofollow",children:"Video Text Track format"})," and ",e.jsx(o.a,{href:"https://css-tricks.com/improving-video-accessibility-with-webvtt/",rel:"nofollow",children:"customisation examples"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<video controls src="path/to/your/video.mp4">
  <track default kind="captions" srclang="en" src="path/to/your/file.vtt" />
</video>
`})}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.p,{children:"Play the video above to see the video captions and the improved styles for accessibility. You can also play the video in fullscreen to see the adapted styles."}),`
`,e.jsx(a,{of:c})]})}function u(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{u as default};
