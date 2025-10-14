import{j as e,M as r,C as s}from"./index-B9H_Fiyr.js";import{useMDXComponents as i}from"./index-COljEU0r.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-ChBC4xfh.js";import"./iframe-DyLTWKTg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVH3pwqA.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-pyqb-EdF.js";import"./AccordionItem-x4dIUZzP.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-EsWe1XVB.js";import"./Card-CbEfrsgF.js";import"./ShareBar-CJekMGGT.js";import"./Print-D2ZN1okh.js";import"./Hero-D9k2No4q.js";import"./MetaInfo-DmYCQKaI.js";import"./Authors-BHxoh7aK.js";import"./AlterBodyClasses-DWr5V1BV.js";import"./TopHeader-CufaXx91.js";import"./pinia-C1gaL1xO.js";import"./LanguageSwitcher-B5yGWCvs.js";import"./Select-obVeQjgQ.js";import"./Logo-ByaUbEBF.js";import"./Input-D8v8d5Uk.js";import"./Breadcrumb-M9gKlK6O.js";import"./DesktopMenu-BePgDCsC.js";import"./MainNavigation-BNk4LbyX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-DjNqYRD9.js";import"./Btn-C-hoyxVV.js";import"./FooterNavigation-KG_aSFP4.js";import"./MobileMenu-Bo5HmVgv.js";import"./swiper-vue-Bn1Q02lv.js";import"./TopBarNavigation-BloQ6xFI.js";import"./v4-C6aID195.js";import"./TopBar-B-qdPlVO.js";import"./Badge-C6s3OnKG.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`})})]})}function H(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{H as default};
