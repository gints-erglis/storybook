import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as a}from"./index-BVXH1tlS.js";import{a4 as o,a6 as t,a5 as i}from"./index-Bug0nMbJ.js";import{S as d,a as c}from"./Sidebar.stories-xd-w3OOE.js";import{s as l}from"./sidebar-DEBtjhaT.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";const h=`/* Sidebar beside the content while both fit, stacked when they do not. */
.sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.sidebar__aside {
  flex: 1 1 15rem;
  padding: var(--space-2);
  border-radius: var(--radius);
  background: var(--surface);
}

.sidebar__main {
  flex: 999 1 0;
  min-inline-size: 60%;
}

.sidebar > * > :first-child {
  margin-block-start: 0;
}
`;function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(n.p,{children:"Sidebar and content side by side while both fit, stacked when they do not. Resize the canvas."}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(i,{language:"html",code:l}),`
`,e.jsx(i,{language:"css",code:h}),`
`,e.jsxs(n.p,{children:["Uses the ",e.jsx(n.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),"."]}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Flex-wrap with a huge ",e.jsx(n.code,{children:"flex-grow"})," on the content and ",e.jsx(n.code,{children:"min-inline-size: 60%"})," switches the layout by available space, not by screen size, so it also works inside narrower containers."]}),`
`,e.jsxs(n.li,{children:["The old fixed ",e.jsx(n.code,{children:"15rem 1fr"})," grid overflowed on phones; this version cannot."]}),`
`,e.jsx(n.li,{children:"The sidebar comes first in the source, so it is also first when stacked and in the tab order."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<aside>"})," with ",e.jsx(n.code,{children:"aria-label"})," is a named landmark (“Filters”) screen reader users can jump to."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(n.p,{children:`| Check | How | Status |
| --- | --- | --- |
| “Filters” is listed as a landmark | VoiceOver rotor, NVDA landmarks | ☐ |
| Tab order matches the visual order at every width | Keyboard only | ☐ |
| No horizontal scroll at 320px and at 400% zoom | Responsive viewport, browser zoom | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function z(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{z as default};
