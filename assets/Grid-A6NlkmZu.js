import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as o}from"./index-BVXH1tlS.js";import{a4 as t,a6 as a,a5 as n}from"./index-Bug0nMbJ.js";import{G as c,a as d}from"./Grid.stories-C3RbjTxv.js";import{a as m}from"./grid-DjnXB9vC.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";import"./card-B8mi7PqA.js";const l=`/* As many columns as fit, each at least --grid-min wide. */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min, 18rem), 100%), 1fr));
  gap: var(--space-3);
}
`;function r(s){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(i.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(i.p,{children:"As many columns as fit. Resize the canvas: 3, 2, 1 columns, no breakpoints."}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(i.h2,{id:"code",children:"Code"}),`
`,e.jsx(n,{language:"html",code:m}),`
`,e.jsx(n,{language:"css",code:l}),`
`,e.jsxs(i.p,{children:["Change the minimum column width per grid: ",e.jsx(i.code,{children:'<div class="grid" style="--grid-min: 12rem">'}),"."]}),`
`,e.jsx(i.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"repeat(auto-fit, minmax(…, 1fr))"})," lets the browser decide the column count from the space it has, so the grid works in a sidebar, a modal or a full page without media queries."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"min(var(--grid-min), 100%)"})," stops a column from overflowing on screens narrower than the minimum."]}),`
`,e.jsx(i.li,{children:"One custom property replaces the old small/medium/large classes: any width, set where it is used."}),`
`,e.jsx(i.li,{children:"Items in a row stretch to the same height, so cards line up without fixed heights."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(i.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Visual order matches source order (no reordering) | Tab through the cards | ☐ |
| No horizontal scroll at 320px and at 400% zoom | Responsive viewport, browser zoom | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function S(s={}){const{wrapper:i}={...o(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(r,{...s})}):r(s)}export{S as default};
