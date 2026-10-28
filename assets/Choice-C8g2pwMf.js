import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as t}from"./index-BVXH1tlS.js";import{a4 as r,a6 as i,a5 as s}from"./index-Bug0nMbJ.js";import{C as a,a as l,D as d,m as h}from"./Choice.stories-Bu30t_wO.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";const x=`.choice {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  inline-size: fit-content;
  min-block-size: 2rem;
  cursor: pointer;
}

.choice input {
  flex: none;
  inline-size: 1.25em;
  block-size: 1.25em;
  margin: 0;
  accent-color: var(--accent);
  cursor: inherit;
}

.choice input:focus-visible {
  outline: var(--focus);
  outline-offset: 2px;
}

.choice:has(:disabled) {
  color: var(--muted);
  cursor: not-allowed;
}
`;function c(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"checkbox-and-radio",children:"Checkbox and radio"}),`
`,e.jsxs(n.p,{children:["Native inputs, colored with one line: ",e.jsx(n.code,{children:"accent-color"}),"."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,e.jsxs(n.p,{children:["The checkboxes turn dark on their own: ",e.jsx(n.code,{children:"color-scheme: dark"})," reaches native controls."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(s,{language:"html",code:h}),`
`,e.jsx(s,{language:"css",code:x}),`
`,e.jsxs(n.p,{children:["Uses the ",e.jsx(n.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),". In a form, group related choices in a ",e.jsx(n.code,{children:"<fieldset>"})," with a ",e.jsx(n.code,{children:"<legend>"}),"."]}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The input sits inside its ",e.jsx(n.code,{children:"<label>"}),", so the whole text is clickable and no ",e.jsx(n.code,{children:"id"}),"/",e.jsx(n.code,{children:"for"})," pair is needed. Copying the markup twice cannot create duplicate ids."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"accent-color"})," keeps the real native control: keyboard, states, forced colors and dark scheme all work without redrawing the box with ",e.jsx(n.code,{children:"appearance: none"}),"."]}),`
`,e.jsxs(n.li,{children:["The two old variants (default size and custom-drawn) are now one. Size follows the font size (",e.jsx(n.code,{children:"1.25em"}),")."]}),`
`,e.jsxs(n.li,{children:["Disabled state is read from the input itself with ",e.jsx(n.code,{children:":has(:disabled)"}),", so there is no extra class to keep in sync."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(n.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Tab reaches checkboxes, Space toggles; arrows move between radios | Keyboard only | ☐ |
| Clicking the label text toggles the input | Mouse | ☐ |
| Focus ring visible on light and dark | Tab through both stories | ☐ |
| State read correctly (“checked”, “dimmed/unavailable”) | VoiceOver, NVDA | ☐ |
| Controls visible in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function D(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{D as default};
