import{j as o,M as a,C as i}from"./index-CcAnzPx6.js";import{useMDXComponents as t}from"./index-BerLD5Z3.js";import"./detailPageSimple-Bp-hP9J6.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-B9_E_Pci.js";import"./iframe-CZqSyjT2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DkDiOc0H.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-BrbFzUHq.js";import"./AudioPlayer-CalXh0k0.js";import"./DownloadItem-kP60u-TY.js";import"./SvgIcon-2YXGQNRQ.js";import"./MetaInfo-CFss2JSt.js";import"./Newsletter-D2v46RmD.js";import"./Input-DZUh2PQ9.js";import"./Btn-m_lEWoLT.js";import"./Notification-XkIRuM99.js";import"./RelatedTags-CwrhRlat.js";import"./TagItem-CHZ__745.js";import"./SlideshowExample-DcnG6Hcp.js";import"./swiper-vue-DWJpv536.js";import"./TableSortable-qAG3QmXW.js";import"./ContactSection-8gjtQSSW.js";import"./Contact-DvE0cMKt.js";import"./AccordionItem-DvOWFReZ.js";import"./Accordion-3JELBM4F.js";import"./Hero-CQTKvecN.js";import"./Authors-b7Qi8Pqq.js";import"./MoreInfosAccordionSection-zdSVts6f.js";import"./Card-Dny2TzT6.js";import"./QuoteSection-DFlebJqM.js";import"./Badge-B4HbO6Gx.js";import"./Modal-CX9Tq8rF.js";import"./Popover-Clz1CUqc.js";import"./ShareBar-Bep1Ntrp.js";import"./Print-B105qhwT.js";import"./AlterBodyClasses-mkIJUU6N.js";import"./TopHeader-usH-l7en.js";import"./pinia-BZY0Ht3G.js";import"./LanguageSwitcher-DTYBaIAD.js";import"./Select-D8bO1RW9.js";import"./Logo-DcAtSIDf.js";import"./Breadcrumb-CQyimaCG.js";import"./DesktopMenu-BGUngWoD.js";import"./MainNavigation-Dm-tUyPB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-1KxUW5S3.js";import"./FooterNavigation-Dnm5EROt.js";import"./MobileMenu-DCAvOG6V.js";import"./TopBarNavigation-CQ9-hQYD.js";import"./v4-CmTdKEVZ.js";import"./TopBar-HExeNdUF.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
