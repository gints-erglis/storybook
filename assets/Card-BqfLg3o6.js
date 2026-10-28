import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as s}from"./index-BVXH1tlS.js";import{a4 as o,a6 as i,a5 as a}from"./index-Bug0nMbJ.js";import{C as d,a as c,D as l}from"./Card.stories-BD9IW-U0.js";import{c as h}from"./card-B8mi7PqA.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";const x=`/* Image and text sit side by side when the card is wide enough,
   and stack when it is not. No media or container queries needed. */
.card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
  color: var(--ink);
}

.card__image {
  flex: 1 1 15rem;
  inline-size: 100%;
  block-size: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.card__body {
  flex: 999 1 20rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3);
}

.card__body > * {
  margin: 0;
}

.card__body p {
  color: var(--muted);
}

.card__title {
  font-size: 1.25rem;
  line-height: 1.3;
}

.card__title a {
  color: inherit;
  text-decoration: none;
}

/* The title link covers the whole card, so the card is one click target. */
.card__title a::after {
  content: "";
  position: absolute;
  inset: 0;
}

.card:hover {
  border-color: var(--accent);
}

.card:hover .card__title a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.card:has(:focus-visible) {
  outline: var(--focus);
  outline-offset: 2px;
}

.card__title a:focus-visible {
  outline: none;
}
`;function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.code,{children:"<article>"})," whose title link covers the whole card. Wide: image beside the text. Narrow: stacked. Resize the canvas to see it switch."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(a,{language:"html",code:h}),`
`,e.jsx(a,{language:"css",code:x}),`
`,e.jsxs(n.p,{children:["Uses the ",e.jsx(n.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),". Inside a ",e.jsx(n.a,{href:"?path=/docs/03-templates-grid--docs",children:"Grid"}),", cards in a row get equal height."]}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["One link per card, in the title. The whole card is clickable through ",e.jsx(n.code,{children:"::after { inset: 0 }"}),", and screen readers hear one meaningful link instead of several “Read more” links."]}),`
`,e.jsxs(n.li,{children:["The layout switch uses flex-wrap with a large ",e.jsx(n.code,{children:"flex-grow"})," on the text: the card reacts to its own width, wherever it is placed, without media or container queries."]}),`
`,e.jsxs(n.li,{children:["The image has ",e.jsx(n.code,{children:'alt=""'})," because the title already says what the card is about. Use real alt text if the image carries information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"height"})," on the image reserve space, so the page does not jump while it loads."]}),`
`,e.jsxs(n.li,{children:["The heading level (",e.jsx(n.code,{children:"h3"}),") depends on the page. Change it so headings stay in order."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(n.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Tab stops once per card, on the title link | Keyboard only | ☐ |
| Focus ring shows around the whole card | Tab through both stories | ☐ |
| Screen reader reads the title as the link name | VoiceOver links list, NVDA elements list | ☐ |
| Text can still be selected without following the link | Mouse | ☐ |
| Text contrast ≥ 4.5:1 | Muted text 7.5:1 light, 8.8:1 dark (calculated) | ☐ |
| Readable at 320px width and 200% zoom | Responsive viewport, browser zoom | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function T(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{T as default};
