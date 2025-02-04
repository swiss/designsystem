import{j as o,M as a,C as i}from"./index-CRWzZNZ5.js";import{useMDXComponents as t}from"./index-KXHshfbB.js";import"./detailPageSimple-7_sGPHEG.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-DBbb_H9u.js";import"./iframe-DiG2XWOx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-B8GkW3lv.js";import"./AudioPlayer-CxVzoXmj.js";import"./DownloadItem-BJAE8kQa.js";import"./SvgIcon-C2oWUqO3.js";import"./MetaInfo-BfsCjQtf.js";import"./Newsletter-DRoxP3TU.js";import"./Input-BzHncvgf.js";import"./Btn-DUZbp-ny.js";import"./Notification-C6enzcPA.js";import"./RelatedTags-Bh6CldJX.js";import"./TagItem-COgMlITj.js";import"./SlideshowExample-dkiAFNsp.js";import"./swiper-vue-CqNMza4E.js";import"./TableSortable-D8NkOTpA.js";import"./ContactSection-DRMr0GMZ.js";import"./Contact-BgLLxm5q.js";import"./AccordionItem-CYDNb0Iv.js";import"./Accordion-3JELBM4F.js";import"./Hero-BSoEr7og.js";import"./Authors-BHiWS5Nl.js";import"./MoreInfosAccordionSection-CdV2ZlG8.js";import"./Card-fOTAw7sq.js";import"./QuoteSection-BATToJ0L.js";import"./Badge-BVf8V8uO.js";import"./Modal-DVySxjTl.js";import"./Popover-CajkqsyP.js";import"./ShareBar-BAGFfw5p.js";import"./Print-Bou-T0Te.js";import"./AlterBodyClasses-Dp7fZS-z.js";import"./TopHeader-pxqwSjKK.js";import"./pinia-CdeU9Ifc.js";import"./LanguageSwitcher-BZzzkvNj.js";import"./Select-J4otqiNP.js";import"./Logo-BRJrKNko.js";import"./Breadcrumb-BSd1pMjW.js";import"./DesktopMenu-DLt0qwf8.js";import"./MainNavigation-Cgt71oKo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-CsXkU8LZ.js";import"./FooterNavigation-cV_Du2Oa.js";import"./MobileMenu-BbrxM3zl.js";import"./TopBarNavigation-BH9xi5iG.js";import"./v4-C6aID195.js";import"./TopBar-7fR-jH2O.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
`})})]})}function po(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{po as default};
