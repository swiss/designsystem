import{j as e,M as r,C as s}from"./index-t992ZlYY.js";import{useMDXComponents as i}from"./index-ItJIzRJj.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-gQ_bkULc.js";import"./iframe-CWspoYnI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-B8GkW3lv.js";import"./AccordionItem-BSURuTqS.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-DacSMykS.js";import"./Card-fOTAw7sq.js";import"./ShareBar-Bi3YK6RP.js";import"./Print-CfIZ2UyJ.js";import"./Hero-Bwsy3phl.js";import"./MetaInfo-BfsCjQtf.js";import"./Authors-ulvrsUxL.js";import"./AlterBodyClasses-s2MV3OrK.js";import"./TopHeader-BVj_dF6F.js";import"./pinia-CdeU9Ifc.js";import"./LanguageSwitcher-BZzzkvNj.js";import"./Select-J4otqiNP.js";import"./Logo-BRJrKNko.js";import"./Input-BzHncvgf.js";import"./Breadcrumb-B5yJ8q5b.js";import"./DesktopMenu-DSl5px-R.js";import"./MainNavigation-C9ypdkR5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-CqutkDWJ.js";import"./Btn-CQzPwLlm.js";import"./FooterNavigation-cV_Du2Oa.js";import"./MobileMenu-y6DcPgVh.js";import"./swiper-vue-CqNMza4E.js";import"./TopBarNavigation-C0FCSBHm.js";import"./v4-C6aID195.js";import"./TopBar-BoP2WiIS.js";import"./Badge-wfP9IGE_.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
