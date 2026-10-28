import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as r}from"./index-BVXH1tlS.js";import{a4 as a,a5 as o}from"./index-Bug0nMbJ.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const t=`/* Design tokens: the whole visual language in a handful of values. */
:root {
  /* light-dark() resolves where a token is used, so any container
     with color-scheme: dark flips everything inside it. */
  color-scheme: light;

  --ink: light-dark(#1a1a1a, #f2f2f2);
  --muted: light-dark(#555, #b3b3b3);
  --paper: light-dark(#fff, #141414);
  --surface: light-dark(#f5f5f5, #1f1f1f);
  --line: light-dark(#d9d9d9, #3a3a3a);
  --accent: light-dark(#535bf2, #9ba0ff);

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;

  --radius: 0.5rem;
  --focus: 2px solid var(--accent);
  --ease: 200ms ease-out;
  --max-width: 70rem;
}

/* Inverted band: put any component inside, no component changes needed. */
.scheme-dark {
  color-scheme: dark;
  background: var(--paper);
  color: var(--ink);
  padding: var(--space-3);
}

/* Hidden on screen, still read by screen readers. */
.visually-hidden {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"00-Constants/Tokens"}),`
`,e.jsx(n.h1,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every component uses these values and nothing else. Colors are ",e.jsx(n.code,{children:"light-dark()"})," pairs, so wrapping any component in ",e.jsx(n.code,{children:".scheme-dark"})," inverts it."]}),`
`,e.jsx(o,{language:"css",code:t}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A handful of values keeps the visual language consistent. A new color or spacing step needs a reason."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"light-dark()"})," resolves where the token is used, not where it is defined. One class on a container flips everything inside it, including native controls (checkboxes, scrollbars, inputs)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--surface"})," is a quiet background for headers and sidebars, ",e.jsx(n.code,{children:"--paper"})," is the page itself."]}),`
`]}),`
`,e.jsx(n.h2,{id:"contrast-calculated",children:"Contrast (calculated)"}),`
`,e.jsxs(n.p,{children:[`| Pair | Light | Dark |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--ink"})," on ",e.jsx(n.code,{children:"--paper"}),` | 17.4:1 | 16.5:1 |
| `,e.jsx(n.code,{children:"--muted"})," on ",e.jsx(n.code,{children:"--paper"}),` | 7.5:1 | 8.8:1 |
| `,e.jsx(n.code,{children:"--accent"})," on ",e.jsx(n.code,{children:"--paper"}),` | 5.1:1 | 7.8:1 |
| `,e.jsx(n.code,{children:"--paper"})," on ",e.jsx(n.code,{children:"--accent"})," (button text) | 5.1:1 | 7.8:1 |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--line"})," is decorative and is never the only way to tell something apart."]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
