import{ae as e,af as a,ag as t}from"./index-JG4blpuO.js";import{u as s}from"./index-DbC4WVoY.js";import"./AccordionItem-Cu2io6k4.js";import{A as c,E as r,L as d}from"./Accordion.stories-B8JGOwrJ.js";import"./iframe-Cx-Qd_Dr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-BjII9Y0z.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h1,{id:"accordion-with-loading-spinner",children:"Accordion with loading spinner"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"interactions-and-accessibility",children:"Interactions and accessibility"}),`
`,e.jsxs(n.p,{children:["Each accordion item regroup a button ",e.jsx(n.code,{children:".accordion__button"})," and a related ",e.jsx(n.code,{children:".accordion__drawer"}),". Each button have an ",e.jsx(n.code,{children:"aria-controls"})," attribute pointing the id of the drawer:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ul class="accordion">
  <li class="accordion__item">
    <button
      class="accordion__button"
      aria-expanded="false"
      :aria-controls="content-id"
    >
      <h3 class="accordion__title">
        <!--Title here-->
      </h3>
      <svg class="accordion__arrow">...</svg>
    </button>
    <div class="accordion__drawer" aria-hidden="true" :id="content-id">
      <div class="accordion__content vertical-spacing">
        <!--Content here-->
      </div>
    </div>
  </li>
</ul>
`})}),`
`,e.jsx(n.p,{children:"During interactions, some ARIA attributes have to be modified for a correct behaviour on assitive technologies."}),`
`,e.jsx(n.p,{children:"Below an example of a simple script resolving two accessibility topics:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Toggle ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-hidden"})," attributes on accordion button."]}),`
`,e.jsx(n.li,{children:"Hide the eventual focusable elements inside a closed accordion"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const Accordion = {
  init(target) {
    let buttons = document.querySelectorAll(target)
    buttons.forEach((button) => {
      let content = button.nextElementSibling
      let focusableElements = getFocusableElements(content)
      // make focusable content unfocusable
      focusableElements.forEach((item) => {
        item.tabIndex = -1
      })

      button.addEventListener('click', (event) => {
        if (button.classList.contains('active')) {
          // close drawer
          button.classList.remove('active')
          button.setAttribute('aria-expanded', false)
          content.style.maxHeight = null
          content.setAttribute('aria-hidden', true)
          // make focusable content unfocusable
          focusableElements.forEach((item) => {
            item.tabIndex = -1
          })
        } else {
          // open drawer
          button.classList.add('active')
          content.style.maxHeight = content.scrollHeight + 'px'
          content.setAttribute('aria-hidden', false)
          button.setAttribute('aria-expanded', true)
          // make focusable content focusable again
          focusableElements.forEach((item) => {
            item.tabIndex = undefined
          })
        }
      })
    })
  },
}
export default Accordion
`})}),`
`,e.jsx(n.h1,{id:"headings-and-accessibility",children:"Headings and accessibility"}),`
`,e.jsx(n.h2,{id:"accordion-title",children:"Accordion title"}),`
`,e.jsxs(n.p,{children:["Most of the time, the label of an accordion can be considered as a heading and should be marked with a ",e.jsx(n.code,{children:"h2"}),", ",e.jsx(n.code,{children:"h3"})," or a ",e.jsx(n.code,{children:"h4"}),"."]}),`
`,e.jsxs(n.p,{children:["The heading level depends on the parent heading level and should respect the heading chain. For example, a ",e.jsx(n.code,{children:"h4"})," heading shouldn't follow a ",e.jsx(n.code,{children:"h2"})," title (use a ",e.jsx(n.code,{children:"h3"})," instead). This rule applies on accordions titles too."]}),`
`,e.jsxs(n.p,{children:["More informations about ",e.jsx(n.a,{href:"https://dequeuniversity.com/rules/axe/4.4/heading-order?application=axeAPI",rel:"nofollow",children:"why heading levels should only increase by one"}),"."]}),`
`,e.jsx(n.h2,{id:"titles-inside-an-accordion",children:"Titles inside an accordion"}),`
`,e.jsxs(n.p,{children:["Following the same logic, the titles inside an accordion content should be considered as subtitles of the accordion title. For example, if the accordion title is a ",e.jsx(n.code,{children:"h3"}),", the following titles inside the accordion should start with a ",e.jsx(n.code,{children:"h4"})]}),`
`,e.jsx(n.h2,{id:"styles-for-titles-inside-an-accordion",children:"Styles for titles inside an accordion"}),`
`,e.jsxs(n.p,{children:["The recommended style for any heading inside an accordion is the ",e.jsx(n.code,{children:".h5"})," CSS class. For example, a fourth level heading will adopt the ",e.jsx(n.code,{children:'<h4 class="h5">'})," markup."]}),`
`,e.jsx(n.h2,{id:"rules-of-thumb",children:"Rules of thumb"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Accordion heading level = Parent title level + 1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Heading level inside an accordion content = Accordion heading level + 1"})}),`
`]}),`
`,e.jsxs(n.p,{children:["If these rules can't be applied technically, for example in a complex migration process, the best option is to ",e.jsx(n.strong,{children:"remove the headings inside the accordions"}),". With this approach, the semantic of the titles is lost, but the content doesn't bring confusion for people using assistive technologies."]})]})}function _(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{_ as default};
