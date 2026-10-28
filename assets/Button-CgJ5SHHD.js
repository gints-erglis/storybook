import{j as n}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as s}from"./index-BVXH1tlS.js";import{a4 as a,a6 as t,a5 as r}from"./index-Bug0nMbJ.js";import{B as c,a as l,D as d,m as h}from"./Button.stories-CE5Cwoj4.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";/* empty css               */const u=`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  min-block-size: 2.75rem;
  padding: 0 var(--space-3);
  border: 2px solid var(--accent);
  border-radius: var(--radius);
  background: var(--accent);
  color: var(--paper);
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
}

.button:hover {
  background: color-mix(in srgb, var(--accent) 85%, var(--ink));
}

.button:focus-visible {
  outline: var(--focus);
  outline-offset: 2px;
}

.button:active {
  translate: 0 1px;
}

.button--secondary {
  background: transparent;
  color: var(--accent);
}

.button--secondary:hover {
  background: color-mix(in srgb, var(--accent) 10%, transparent);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`;function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsxs(e.p,{children:["A real ",n.jsx(e.code,{children:"<button>"})," for actions, the same class on ",n.jsx(e.code,{children:"<a>"})," for navigation that should look like a button."]}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(e.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(r,{language:"html",code:h}),`
`,n.jsx(r,{language:"css",code:u}),`
`,n.jsxs(e.p,{children:["Uses the ",n.jsx(e.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),"."]}),`
`,n.jsx(e.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'<button type="button">'})," gets focus, Enter and Space, and the button role for free. ",n.jsx(e.code,{children:'type="button"'})," stops it from submitting a surrounding form by accident."]}),`
`,n.jsxs(e.li,{children:["A link that goes somewhere stays an ",n.jsx(e.code,{children:"<a href>"}),", even when it looks like a button. Screen reader users hear “link” and know the page will change."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min-block-size: 2.75rem"})," gives a 44px touch target without fixed heights, so long labels can still grow."]}),`
`,n.jsxs(e.li,{children:["Hover is ",n.jsx(e.code,{children:"color-mix()"})," of existing tokens, not a new color, so it works in the dark band too."]}),`
`,n.jsx(e.li,{children:"No sizes. One size covers almost every case; add a modifier only when a real design needs it."}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,n.jsx(e.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Tab reaches every button, Enter and Space activate it (link: Enter only) | Keyboard only | ☐ |
| Focus ring visible on light and dark | Tab through both stories | ☐ |
| Role read correctly (“button” vs “link”) | VoiceOver, NVDA | ☐ |
| Text contrast ≥ 4.5:1 | 5.1:1 light, 7.8:1 dark (calculated) | ☐ |
| Visible in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function C(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{C as default};
