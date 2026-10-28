import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as t}from"./index-BVXH1tlS.js";import{a4 as a,a6 as r,a5 as o}from"./index-Bug0nMbJ.js";import{P as c,a as d}from"./Page.stories-Cr8tzw8h.js";import{t as l}from"./page-CddPnTW6.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";import"./navigation-BRQETj7m.js";import"./header-CpuDs9UV.js";/* empty css               */import"./footer-CJMD3tkF.js";const h=`.page {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-block-size: 100dvh;
  background: var(--paper);
  color: var(--ink);
}

.page__main {
  inline-size: min(100% - 2 * var(--space-3), var(--max-width));
  margin-inline: auto;
  padding-block: var(--space-3);
}

/* Off screen until focused, then it slides in at the top. */
.skip-link {
  position: absolute;
  inset-block-start: var(--space-1);
  inset-inline-start: var(--space-1);
  z-index: 10;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius);
  background: var(--accent);
  color: var(--paper);
  font-weight: 600;
  translate: 0 -200%;
}

.skip-link:focus {
  translate: 0;
  outline: var(--focus);
  outline-offset: 2px;
}
`;function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"page",children:"Page"}),`
`,e.jsxs(n.p,{children:["Skip link, ",e.jsx(n.a,{href:"?path=/docs/02-organisms-header--docs",children:"Header"}),", ",e.jsx(n.code,{children:"<main>"}),", ",e.jsx(n.a,{href:"?path=/docs/02-organisms-footer--docs",children:"Footer"}),". Press Tab once inside the canvas to see the skip link."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(o,{language:"html",code:l}),`
`,e.jsx(o,{language:"css",code:h}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<!-- @header -->"}),"-style lines are where the Header, the page content and the Footer go. “Show code” on the canvas gives the full assembled page."]}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The skip link is the first focusable element, so keyboard users can jump past the header straight to ",e.jsx(n.code,{children:'<main id="main">'}),"."]}),`
`,e.jsxs(n.li,{children:["It is moved off screen with ",e.jsx(n.code,{children:"translate"}),", not ",e.jsx(n.code,{children:"display: none"}),", so it can still receive focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"grid-template-rows: auto 1fr auto"})," with ",e.jsx(n.code,{children:"min-block-size: 100dvh"})," keeps the footer at the bottom on short pages. ",e.jsx(n.code,{children:"dvh"})," follows the visible height on mobile browsers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min(100% - 2 * gap, max-width)"})," gives a centered content column and side gutters in one line."]}),`
`,e.jsxs(n.li,{children:["One ",e.jsx(n.code,{children:"<header>"}),", one ",e.jsx(n.code,{children:"<main>"}),", one ",e.jsx(n.code,{children:"<footer>"}),": the three landmarks screen reader users expect."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsxs(n.p,{children:[`| Check | How | Status |
| --- | --- | --- |
| First Tab shows “Skip to content”; Enter moves focus to main | Keyboard only | ☐ |
| Banner, main and contentinfo landmarks are listed | VoiceOver rotor, NVDA landmarks | ☐ |
| Page has exactly one `,e.jsx(n.code,{children:"h1"}),` | HeadingsMap or screen reader headings list | ☐ |
| Footer stays at the bottom on a short page | Visual | ☐ |
| No horizontal scroll at 320px and at 400% zoom | Responsive viewport, browser zoom | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`]})]})}function F(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{F as default};
