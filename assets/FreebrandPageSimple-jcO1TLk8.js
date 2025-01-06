import{ae as o,af as a,ag as i}from"./index-1ok-A262.js";import{u as t}from"./index-Jbkj_GC6.js";import"./detailPageSimple-AwP6cduI.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-B1kfFA_2.js";import"./iframe-C7igeh9B.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./AudioPlayer-COP1LdpP.js";import"./DownloadItem-LywhT4Td.js";import"./SvgIcon-CJ45lfp5.js";import"./MetaInfo-CBlTXnbi.js";import"./Newsletter-D3Icr2JX.js";import"./Input-BG4Sdj6p.js";import"./Btn-CdzkYC8x.js";import"./Notification-BJ2cJrXM.js";import"./RelatedTags-V8F4y-bQ.js";import"./TagItem-CpKOMcfC.js";import"./SlideshowExample-CWKUDMQr.js";import"./swiper-vue-CK8r6Ueo.js";import"./TableSortable-Wsdo7jzu.js";import"./ContactSection-CbIHlJcX.js";import"./Contact-DL07ewxd.js";import"./AccordionItem-CboD7_-L.js";import"./Accordion-3JELBM4F.js";import"./Hero-Lptlj54C.js";import"./Authors-X1Cud6p1.js";import"./MoreInfosAccordionSection-DfPZqi1_.js";import"./Card-CvXM943v.js";import"./QuoteSection-DeMUg6te.js";import"./Badge-B3Xa2Q_9.js";import"./Modal-BIhgXhib.js";import"./Popover-B5IaMQ_S.js";import"./ShareBar-BcjTLeO0.js";import"./Print-BmwhKl6o.js";import"./AlterBodyClasses-Bw3h5Y6s.js";import"./TopHeader-DMnSvnx6.js";import"./pinia-C9w1FlR-.js";import"./LanguageSwitcher-DEqsIW4F.js";import"./Select-By2N4Zx3.js";import"./Logo-DP4E4Y6c.js";import"./Breadcrumb-Yl7v2RG_.js";import"./DesktopMenu-DgV2oaNn.js";import"./MainNavigation-Dapsj5Ch.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-DbTT0IHt.js";import"./FooterNavigation-3I5JfM3u.js";import"./MobileMenu-DOBM7FzZ.js";import"./TopBarNavigation-C4dEC1of.js";import"./v4-Ch9TGLTe.js";import"./TopBar-Bysg9Qnf.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
`,o.jsx(e.h1,{id:"freebrand-simple-page-example",children:"Freebrand Simple page example"}),`
`,o.jsx("a",{href:"?path=/story/pages-freebrand-detail-page-simple--example",children:"Go to the Canvas Tab"}),`
`,o.jsx(e.hr,{}),`
`,o.jsx("a",{href:"?id=pages-freebrand-detail-page-simple--example",target:"_blank",children:"Open page in full width in a new tab"}),`
`,o.jsx(e.p,{children:"Freebrand design. See bottom of page for configuration options."}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.p,{children:"Overwrite the colors by setting the color style attributes on the body"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`const freebrandColors = [
  { key: '--color-primary-50', value: '#eaffe9' },
  { key: '--color-primary-100', value: '#d3ebd2' },
  { key: '--color-primary-200', value: '#bdd8bc' },
  { key: '--color-primary-300', value: '#a7c4a6' },
  { key: '--color-primary-400', value: '#91b191' },
  { key: '--color-primary-500', value: '#7c9f7c' },
  { key: '--color-primary-600', value: '#678d67' },
  { key: '--color-primary-700', value: '#537b54' },
  { key: '--color-primary-800', value: '#3e6940' },
  { key: '--color-primary-900', value: '#2a582e' },
  { key: '--color-secondary-50', value: '#efffee' },
  { key: '--color-secondary-100', value: '#b0beb0' },
  { key: '--color-secondary-200', value: '#768176' },
  { key: '--color-secondary-300', value: '#404941' },
  { key: '--color-secondary-400', value: '#758874' },
  { key: '--color-secondary-500', value: '#6a7f69' },
  { key: '--color-secondary-600', value: '#5f755f' },
  { key: '--color-secondary-700', value: '#546c55' },
  { key: '--color-secondary-800', value: '#49634b' },
  { key: '--color-secondary-900', value: '#3e5a41' },
]

for (const brandColor of freebrandColors) {
  document.body.style.setProperty(brandColor.key, brandColor.value)
}
`})}),`
`,o.jsx(e.p,{children:"Overwrite fonts by loading the font faces. Has to be loaded last in order for the overwrite to work."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`@font-face {
  font-family: 'Font-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Italic';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold-Italic';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Fallback-font';
  src: local(Verdana);
  advance-override: 125%;
  ascent-override: 95%;
  descent-override: -25%;
  line-gap-override: 25%;
}
`})})]})}function mo(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{mo as default};
