import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as i}from"./index-3rgQkYFR.js";import{aa as t,ab as r,a5 as a}from"./index-srmjAQ2I.js";import{A as c,a as d,D as l,m as h}from"./Accordion.stories-GFc_L4LG.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNNasEPk.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const m=`.accordion {
  max-inline-size: 40rem;
  border-block: 1px solid var(--line);
  color: var(--ink);
}

.accordion details + details {
  border-block-start: 1px solid var(--line);
}

.accordion summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-1);
  font-weight: 600;
  list-style: none;
  cursor: pointer;
}

.accordion summary::-webkit-details-marker {
  display: none;
}

/* Chevron drawn with currentColor, so it follows hover and forced colors. */
.accordion summary::after {
  content: "";
  flex: none;
  inline-size: 0.5em;
  block-size: 0.5em;
  border-inline-end: 2px solid;
  border-block-end: 2px solid;
  rotate: 45deg;
  translate: 0 -25%;
}

.accordion [open] > summary::after {
  rotate: 225deg;
  translate: 0 25%;
}

.accordion summary:hover {
  color: var(--accent);
}

.accordion summary:focus-visible {
  outline: var(--focus);
  outline-offset: 2px;
  border-radius: var(--radius);
}

.accordion__body {
  padding: 0 var(--space-1) var(--space-2);
  color: var(--muted);
}

.accordion__body > :first-child { margin-block-start: 0; }
.accordion__body > :last-child { margin-block-end: 0; }

/* Motion is an enhancement: only when allowed and only where supported. */
@media (prefers-reduced-motion: no-preference) {
  .accordion {
    interpolate-size: allow-keywords;
  }

  .accordion summary::after {
    transition: rotate var(--ease), translate var(--ease);
  }

  .accordion details::details-content {
    block-size: 0;
    overflow: clip;
    transition: block-size var(--ease), content-visibility var(--ease) allow-discrete;
  }

  .accordion details[open]::details-content {
    block-size: auto;
  }
}
`,p=`/* Design tokens: the whole visual language in a handful of values. */
:root {
  /* light-dark() resolves where a token is used, so any container
     with color-scheme: dark flips everything inside it. */
  color-scheme: light;

  --ink: light-dark(#1a1a1a, #f2f2f2);
  --muted: light-dark(#555, #b3b3b3);
  --paper: light-dark(#fff, #141414);
  --line: light-dark(#d9d9d9, #3a3a3a);
  --accent: light-dark(#535bf2, #9ba0ff);

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;

  --radius: 0.5rem;
  --focus: 2px solid var(--accent);
  --ease: 200ms ease-out;
}

/* Inverted band: put any component inside, no component changes needed. */
.scheme-dark {
  color-scheme: dark;
  background: var(--paper);
  color: var(--ink);
  padding: var(--space-3);
}
`;function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsxs(e.p,{children:["Native ",n.jsx(e.code,{children:"<details>"})," and ",n.jsx(e.code,{children:"<summary>"}),". No JavaScript."]}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,n.jsxs(e.p,{children:["The same markup inside ",n.jsx(e.code,{children:'<section class="scheme-dark">'}),". Tokens use ",n.jsx(e.code,{children:"light-dark()"}),", so nothing in the component changes."]}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(a,{language:"html",code:h}),`
`,n.jsx(a,{language:"css",code:m}),`
`,n.jsx(e.p,{children:"Tokens used by the component:"}),`
`,n.jsx(a,{language:"css",code:p}),`
`,n.jsx(e.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"<details>"})," gives open/close, keyboard support and the expanded state to screen readers for free. A ",n.jsx(e.code,{children:"div"})," with JS would have to rebuild all of that by hand."]}),`
`,n.jsxs(e.li,{children:["A shared ",n.jsx(e.code,{children:"name"})," makes the group exclusive (opening one closes the others). Remove ",n.jsx(e.code,{children:"name"})," if several panels may be open at once."]}),`
`,n.jsxs(e.li,{children:["The chevron uses ",n.jsx(e.code,{children:"currentColor"})," borders instead of an icon, so it follows hover and Windows high contrast mode."]}),`
`,n.jsxs(e.li,{children:["The animation (",n.jsx(e.code,{children:"::details-content"})," + ",n.jsx(e.code,{children:"interpolate-size"}),") is an enhancement. Older browsers simply open without motion, and ",n.jsx(e.code,{children:"prefers-reduced-motion"})," turns it off."]}),`
`,n.jsx(e.li,{children:"Content stays in the DOM, so in-page search (Ctrl+F) can find text and open the panel."}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,n.jsxs(e.p,{children:[`| Check | How | Status |
| --- | --- | --- |
| Keyboard: Tab reaches each summary, Enter and Space toggle | Keyboard only, no mouse | ☐ |
| Focus is clearly visible | Tab through, `,n.jsx(e.code,{children:":focus-visible"}),` outline | ☐ |
| Screen reader announces “collapsed / expanded” | VoiceOver (Safari), NVDA (Firefox) | ☐ |
| No axe violations | Storybook a11y panel | ☐ |
| Readable in forced colors | Windows high contrast, or DevTools → Rendering → forced-colors | ☐ |
| No motion with reduced motion | DevTools → Rendering → prefers-reduced-motion: reduce | ☐ |
| Text contrast at least 4.5:1 | Light: 17.4 / 7.5 / 5.1, dark: 16.5 / 8.8 / 7.8 (ink / muted / accent, calculated) | ☐ |
| Dark band: no axe violations, focus ring visible | Storybook a11y panel on the Dark Band story | ☐ |
| Works at 200% zoom and 320px width | Browser zoom, responsive viewport | ☐ |`]})]})}function z(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{z as default};
