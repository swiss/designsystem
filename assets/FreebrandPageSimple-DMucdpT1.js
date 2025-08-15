import{j as o,M as a,C as i}from"./index-CUlAu2in.js";import{useMDXComponents as t}from"./index-qGgWvuis.js";import"./detailPageSimple-DAZYqHvd.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-lv-6nu9N.js";import"./iframe-CUcuPGSR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-pyqb-EdF.js";import"./AudioPlayer-DbmKV6fS.js";import"./DownloadItem-CIGSbpXW.js";import"./SvgIcon-C7NgwIgC.js";import"./MetaInfo-DmYCQKaI.js";import"./Newsletter-C9jhK5g2.js";import"./Input-D8v8d5Uk.js";import"./Btn-DvYxLpB5.js";import"./Notification-ZEc7_MRd.js";import"./RelatedTags-DqJSkrMv.js";import"./TagItem-GFvFfyzs.js";import"./SlideshowExample-gJrcM14G.js";import"./swiper-vue-Bn1Q02lv.js";import"./TableSortable-hxzg2LZm.js";import"./ContactSection-D5I8rEtf.js";import"./Contact-D0mINJ7l.js";import"./AccordionItem-kwF10MfZ.js";import"./Accordion-3JELBM4F.js";import"./Hero-DD4891M3.js";import"./Authors-mkh5Yp5l.js";import"./MoreInfosAccordionSection-BOErmRnB.js";import"./Card-CbEfrsgF.js";import"./QuoteSection-WszyXF4P.js";import"./Badge-Bh8J1sul.js";import"./Modal--tk-rU_J.js";import"./Popover-D5rZwzML.js";import"./ShareBar-7p4TEqem.js";import"./Print-DrlEBk6h.js";import"./AlterBodyClasses-DZDYOek1.js";import"./TopHeader-B3V503_8.js";import"./pinia-C1gaL1xO.js";import"./LanguageSwitcher-B5yGWCvs.js";import"./Select-obVeQjgQ.js";import"./Logo-ByaUbEBF.js";import"./Breadcrumb-DEAnb8np.js";import"./DesktopMenu-EtJrhK85.js";import"./MainNavigation-Bdl8JBXk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-n3Fyv-lE.js";import"./FooterNavigation-KG_aSFP4.js";import"./MobileMenu-CwUUMdyQ.js";import"./TopBarNavigation-CL2byYAJ.js";import"./v4-C6aID195.js";import"./TopBar-Br3SMSSx.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
`})})]})}function lo(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{lo as default};
