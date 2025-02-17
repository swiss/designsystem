import{j as o,M as a,C as i}from"./index-t992ZlYY.js";import{useMDXComponents as t}from"./index-ItJIzRJj.js";import"./detailPageSimple-BrDKyDNa.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-BjX_P7Lr.js";import"./iframe-CWspoYnI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-B8GkW3lv.js";import"./AudioPlayer-CxVzoXmj.js";import"./DownloadItem-BhhZ7p6y.js";import"./SvgIcon-DacSMykS.js";import"./MetaInfo-BfsCjQtf.js";import"./Newsletter-DTECt0L3.js";import"./Input-BzHncvgf.js";import"./Btn-CQzPwLlm.js";import"./Notification-DqdmoAP7.js";import"./RelatedTags-au9twDkM.js";import"./TagItem-BIDBYoHq.js";import"./SlideshowExample-Cd_LshZE.js";import"./swiper-vue-CqNMza4E.js";import"./TableSortable-D8NkOTpA.js";import"./ContactSection-b-gaqSus.js";import"./Contact-iICCDXMz.js";import"./AccordionItem-BSURuTqS.js";import"./Accordion-3JELBM4F.js";import"./Hero-Bwsy3phl.js";import"./Authors-ulvrsUxL.js";import"./MoreInfosAccordionSection-JQlkwqZV.js";import"./Card-fOTAw7sq.js";import"./QuoteSection-BATToJ0L.js";import"./Badge-wfP9IGE_.js";import"./Modal-Bhf_0CSf.js";import"./Popover-CzW3uVxQ.js";import"./ShareBar-Bi3YK6RP.js";import"./Print-CfIZ2UyJ.js";import"./AlterBodyClasses-s2MV3OrK.js";import"./TopHeader-BVj_dF6F.js";import"./pinia-CdeU9Ifc.js";import"./LanguageSwitcher-BZzzkvNj.js";import"./Select-J4otqiNP.js";import"./Logo-BRJrKNko.js";import"./Breadcrumb-B5yJ8q5b.js";import"./DesktopMenu-DSl5px-R.js";import"./MainNavigation-C9ypdkR5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-CqutkDWJ.js";import"./FooterNavigation-cV_Du2Oa.js";import"./MobileMenu-y6DcPgVh.js";import"./TopBarNavigation-C0FCSBHm.js";import"./v4-C6aID195.js";import"./TopBar-BoP2WiIS.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
