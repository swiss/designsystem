import{ae as o,af as a,ag as i}from"./index-JG4blpuO.js";import{u as t}from"./index-DbC4WVoY.js";import"./detailPageSimple-DzJAnxgW.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-CUeGJBv2.js";import"./iframe-Cx-Qd_Dr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./AudioPlayer-COP1LdpP.js";import"./DownloadItem-DjrJXzxP.js";import"./SvgIcon-BjII9Y0z.js";import"./MetaInfo-CBlTXnbi.js";import"./Newsletter--emt2keP.js";import"./Input-BG4Sdj6p.js";import"./Btn-DJ0m0bXS.js";import"./Notification-DeLq4jZJ.js";import"./RelatedTags-DtarOh1_.js";import"./TagItem-B1ml9yOS.js";import"./SlideshowExample-ocf1Ss6u.js";import"./swiper-vue-CK8r6Ueo.js";import"./TableSortable-Wsdo7jzu.js";import"./ContactSection-CQWnNBaC.js";import"./Contact-BbMXZIjA.js";import"./AccordionItem-Cu2io6k4.js";import"./Accordion-3JELBM4F.js";import"./Hero-DwbPMKAW.js";import"./Authors-CeQbfx2z.js";import"./MoreInfosAccordionSection-CHBOXKJH.js";import"./Card-CvXM943v.js";import"./QuoteSection-DeMUg6te.js";import"./Badge-BB5zLuKy.js";import"./Modal-CRmchRvA.js";import"./Popover-BZJfMQ4N.js";import"./ShareBar-lGbBEN2y.js";import"./Print-Clu7GKRP.js";import"./AlterBodyClasses-Bg7yzX-w.js";import"./TopHeader-Cqd8d6WL.js";import"./Logo-DP4E4Y6c.js";import"./LanguageSwitcher-DEqsIW4F.js";import"./Select-By2N4Zx3.js";import"./pinia-C9w1FlR-.js";import"./Breadcrumb-oB7rsZnj.js";import"./DesktopMenu-HDzeBh-T.js";import"./MainNavigation-BsCpbzAK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-D3fGZ8OL.js";import"./FooterNavigation-3I5JfM3u.js";import"./MobileMenu-BrK0uzRV.js";import"./TopBarNavigation-BNlBDFUu.js";import"./v4-Ch9TGLTe.js";import"./TopBar-BzyqVDG8.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
