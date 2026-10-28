import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as r}from"./index-BVXH1tlS.js";import{a4 as i,a6 as c,a5 as t}from"./index-Bug0nMbJ.js";import{F as a,a as d}from"./Footer.stories-BOaYXD8E.js";import{f as l}from"./footer-CJMD3tkF.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";const h=`.footer {
  color: var(--muted);
  text-align: center;
}

.footer p {
  margin: 0;
}
`;function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(o.h1,{id:"footer",children:"Footer"}),`
`,e.jsxs(o.p,{children:["A dark band by default: the footer simply carries ",e.jsx(o.code,{children:".scheme-dark"}),"."]}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(o.h2,{id:"code",children:"Code"}),`
`,e.jsx(t,{language:"html",code:l}),`
`,e.jsx(t,{language:"css",code:h}),`
`,e.jsxs(o.p,{children:["Uses the ",e.jsx(o.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"})," (including ",e.jsx(o.code,{children:".scheme-dark"}),")."]}),`
`,e.jsx(o.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<footer>"})," directly inside the page body is the ",e.jsx(o.code,{children:"contentinfo"})," landmark, so screen reader users can jump to it."]}),`
`,e.jsxs(o.li,{children:["The dark look comes from ",e.jsx(o.code,{children:".scheme-dark"}),", not from footer-specific colors. Links, buttons or checkboxes added later invert by themselves."]}),`
`,e.jsx(o.li,{children:"Muted text on the dark background is 8.8:1, well above the 4.5:1 minimum."}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(o.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Footer is listed as a landmark (on a full page) | VoiceOver rotor, NVDA landmarks | ☐ |
| Text contrast ≥ 4.5:1 | 8.8:1 (calculated) | ☐ |
| Readable in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function F(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{F as default};
