import{j as n}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as s}from"./index-BVXH1tlS.js";import{a4 as a,a6 as r,a5 as i}from"./index-Bug0nMbJ.js";import{L as l,a as c,D as d,m as h}from"./LinkArrow.stories-0lQPqHmm.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";/* empty css                   */const m=`.link-arrow {
  color: var(--accent);
  font-weight: 600;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

/* The arrow is a mask filled with currentColor, so it follows the link color,
   including the system link color in forced colors mode. */
.link-arrow::after {
  content: "";
  display: inline-block;
  inline-size: 1em;
  block-size: 1em;
  margin-inline-start: 0.35em;
  vertical-align: -0.15em;
  background: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M2 8h11M9 4l4 4-4 4' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / contain no-repeat;
  forced-color-adjust: none;
}

.link-arrow:dir(rtl)::after {
  scale: -1 1;
}

.link-arrow:hover {
  text-decoration-thickness: 2px;
}

.link-arrow:focus-visible {
  outline: var(--focus);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (prefers-reduced-motion: no-preference) {
  .link-arrow::after {
    transition: translate var(--ease);
  }

  .link-arrow:hover::after {
    translate: 0.2em 0;
  }
}
`;function t(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"link-with-arrow",children:"Link with arrow"}),`
`,n.jsxs(e.p,{children:["A plain ",n.jsx(e.code,{children:"<a>"})," with a drawn arrow. For a link that should look like a button, use ",n.jsx(e.a,{href:"?path=/docs/00-atoms-button--docs",children:"Button"})," on an ",n.jsx(e.code,{children:"<a>"}),"."]}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(i,{language:"html",code:h}),`
`,n.jsx(i,{language:"css",code:m}),`
`,n.jsxs(e.p,{children:["Uses the ",n.jsx(e.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),"."]}),`
`,n.jsx(e.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The arrow lives in CSS (",n.jsx(e.code,{children:"::after"}),"), not in the markup, so screen readers read only the link text and nothing needs ",n.jsx(e.code,{children:"aria-hidden"}),"."]}),`
`,n.jsxs(e.li,{children:["The arrow is an SVG mask filled with ",n.jsx(e.code,{children:"currentColor"}),": one source of truth for color, and ",n.jsx(e.code,{children:"forced-color-adjust: none"})," keeps it visible in Windows high contrast."]}),`
`,n.jsx(e.li,{children:"The underline stays. Color alone is not enough to tell a link from text."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:":dir(rtl)"})," flips the arrow for right-to-left languages, and the hover nudge only moves when motion is allowed."]}),`
`,n.jsx(e.li,{children:"The link text must make sense on its own (“See all components”, not “Read more”)."}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,n.jsx(e.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Tab reaches the link, Enter follows it | Keyboard only | ☐ |
| Focus ring visible on light and dark | Tab through both stories | ☐ |
| Screen reader reads only the link text | VoiceOver, NVDA | ☐ |
| Text contrast ≥ 4.5:1 | 5.1:1 light, 7.8:1 dark (calculated) | ☐ |
| Arrow visible in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| No arrow motion with reduced motion | DevTools → Rendering → prefers-reduced-motion: reduce | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function S(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{S as default};
