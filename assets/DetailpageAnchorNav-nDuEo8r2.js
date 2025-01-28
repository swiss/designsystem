import{j as e,M as r,C as s}from"./index-q8a6p2eX.js";import{useMDXComponents as i}from"./index-Vi0Awf3j.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-CCyg3sT4.js";import"./iframe-S84rzJ-0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DkDiOc0H.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-BrbFzUHq.js";import"./AccordionItem-G4H9TBTL.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-yY90NkKW.js";import"./Card-Dny2TzT6.js";import"./ShareBar-DE-JkZEr.js";import"./Print-D9Kvnjwg.js";import"./Hero-BmZwS0gp.js";import"./MetaInfo-CFss2JSt.js";import"./Authors-iwISvJsp.js";import"./AlterBodyClasses-DS83o89f.js";import"./TopHeader-xtMaEw4W.js";import"./pinia-BZY0Ht3G.js";import"./LanguageSwitcher-DTYBaIAD.js";import"./Select-D8bO1RW9.js";import"./Logo-DcAtSIDf.js";import"./Input-DZUh2PQ9.js";import"./Breadcrumb-B9fxLfda.js";import"./DesktopMenu-C2yzm9nT.js";import"./MainNavigation-OPmRAcIW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-dllIfvCz.js";import"./Btn-CoAQ1Snt.js";import"./FooterNavigation-Dnm5EROt.js";import"./MobileMenu-BKazDkVk.js";import"./swiper-vue-DWJpv536.js";import"./TopBarNavigation-De-DZIV9.js";import"./v4-CmTdKEVZ.js";import"./TopBar-B6CYuy58.js";import"./Badge-DhovxyvX.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(t.h1,{id:"anchor-navigation-example",children:"Anchor navigation example"}),`
`,e.jsx("a",{href:"?path=/story/pages-detail-page-anchor-nav--example",children:"Go to the Canvas Tab"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("a",{href:"?id=pages-detail-page-anchor-nav--example&args=&viewMode=story",target:"_blank",children:"Open in full width in a new tab"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Remarks:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["the “sticky” functionality works only ",e.jsx("a",{href:"?id=pages-detail-page-anchor-nav--example&args=&viewMode=story",target:"_blank",children:"in full width view"})]}),`
`,e.jsxs(t.li,{children:["A short Javascript example is displayed at the ",e.jsx("a",{href:"#javascript-example",children:"bottom of the page"}),", showing how to set a class on the current menu item, depending on the scroll position."]}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"javascript-example",children:"Javascript example"}),`
`,e.jsxs(t.p,{children:["This is an example how to listen to the scroll and set an ",e.jsx(t.code,{children:".menu__item--active"})," class to the current menu item when a anchored section pops into the viewport."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const AnchorNav = {
  setCurrentMenuItem() {
    // select all titles with an id in the main element.
    // this selection could be narrowed depending on the way the anchoring is implemented:
    const sections = document.querySelectorAll('main h2[id]')
    const scrollOffset = 100
    // Listen to the scroll
    window.onscroll = () => {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop
      for (let s in sections) {
        // if a section pops in the viewport, the current active class is removed
        // and applied to this new appearing section:
        if (
          sections.hasOwnProperty(s) &&
          sections[s].offsetTop <= scrollPos - scrollOffset
        ) {
          const id = sections[s].id
          let currentItem = document.querySelector('.menu__item--active')
          if (currentItem) currentItem.classList.remove('menu__item--active')
          document
            .querySelector(\`a[href*=\${id}]\`)
            .classList.add('menu__item--active')
        }
      }
    }
  },
}
export default AnchorNav
`})}),`
`,e.jsx(t.p,{children:"Import the function above and init the script with"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`AnchorNav.setCurrentMenuItem()
`})})]})}function K(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{K as default};
