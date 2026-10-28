import{j as n}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as a}from"./index-BVXH1tlS.js";import{a4 as r,a6 as s,a5 as t}from"./index-Bug0nMbJ.js";import{N as d,a as c,D as l}from"./Navigation.stories-EpVkLIUj.js";import{n as u}from"./navigation-BRQETj7m.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";const p=`.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav > ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.nav a,
.nav button {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  min-block-size: 2.75rem;
  padding: 0 var(--space-2);
  border: 0;
  border-radius: var(--radius);
  background: none;
  color: var(--ink);
  font: inherit;
  text-decoration: none;
  cursor: pointer;
}

.nav a:hover,
.nav button:hover {
  color: var(--accent);
}

.nav a:focus-visible,
.nav button:focus-visible {
  outline: var(--focus);
  outline-offset: -2px;
}

.nav [aria-current="page"] {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.3em;
}

/* Same chevron as the accordion. */
.nav button::after {
  content: "";
  inline-size: 0.45em;
  block-size: 0.45em;
  border-inline-end: 2px solid;
  border-block-end: 2px solid;
  rotate: 45deg;
  translate: 0 -25%;
}

.nav button[aria-expanded="true"]::after {
  rotate: 225deg;
  translate: 0 25%;
}

.nav__item {
  position: relative;
}

.nav__submenu {
  display: none;
  position: absolute;
  inset-block-start: 100%;
  inset-inline-start: 0;
  z-index: 1;
  min-inline-size: 12rem;
  padding: var(--space-1);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
  box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 0.12);
}

.nav [aria-expanded="true"] + .nav__submenu {
  display: block;
}
`,h=`// Disclosure: a button inside [data-disclosure] toggles aria-expanded,
// CSS shows or hides what follows. Escape, Tab away or a click outside closes it.
export function disclosure(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  for (const scope of root.querySelectorAll('[data-disclosure]')) {
    const button = scope.querySelector(':scope > button[aria-expanded]');
    if (!button) continue;

    const isOpen = () => button.getAttribute('aria-expanded') === 'true';
    const set = (open) => button.setAttribute('aria-expanded', String(open));

    button.addEventListener('click', () => set(!isOpen()), { signal });

    scope.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !isOpen()) return;
      event.stopPropagation();
      set(false);
      button.focus();
    }, { signal });

    scope.addEventListener('focusout', (event) => {
      if (event.relatedTarget && !scope.contains(event.relatedTarget)) set(false);
    }, { signal });

    document.addEventListener('click', (event) => {
      if (!scope.contains(event.target)) set(false);
    }, { signal });
  }

  return () => controller.abort();
}
`;function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"navigation",children:"Navigation"}),`
`,n.jsxs(e.p,{children:["A list of links in ",n.jsx(e.code,{children:"<nav>"}),". A submenu opens with a disclosure button: about 30 lines of JS, the only script in the collection."]}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h3,{id:"in-a-dark-band",children:"In a dark band"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(t,{language:"html",code:u}),`
`,n.jsx(t,{language:"css",code:p}),`
`,n.jsx(t,{language:"js",code:h}),`
`,n.jsxs(e.p,{children:["Load it once: ",n.jsx(e.code,{children:`<script type="module">import { disclosure } from './disclosure.js'; disclosure();<\/script>`}),`.
Uses the `,n.jsx(e.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),"."]}),`
`,n.jsx(e.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["This is the disclosure pattern, not an ARIA ",n.jsx(e.code,{children:"menu"}),". Site navigation is a list of links; ",n.jsx(e.code,{children:'role="menu"'})," would switch screen readers into app mode and require arrow-key handling that users do not expect on a website."]}),`
`,n.jsxs(e.li,{children:["The parent item is a ",n.jsx(e.code,{children:"<button>"})," with ",n.jsx(e.code,{children:"aria-expanded"}),". Its state is the only source of truth: CSS reads it to show the submenu, so there is no extra class or ",n.jsx(e.code,{children:"aria-hidden"})," to keep in sync."]}),`
`,n.jsxs(e.li,{children:["The hidden submenu uses ",n.jsx(e.code,{children:"display: none"}),", so it is out of the tab order and away from screen readers until opened."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'aria-current="page"'})," marks the current page for screen readers and drives the underline."]}),`
`,n.jsxs(e.li,{children:["The same ",n.jsx(e.code,{children:"disclosure.js"})," opens the mobile menu in the ",n.jsx(e.a,{href:"?path=/docs/02-organisms-header--docs",children:"Header"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,n.jsx(e.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Tab reaches every link; Enter/Space on “User area” opens the submenu | Keyboard only | ☐ |
| Escape closes the submenu and returns focus to its button | Keyboard only | ☐ |
| Tabbing out or clicking outside closes it | Keyboard, mouse | ☐ |
| “Collapsed / expanded” and “current page” are announced | VoiceOver, NVDA | ☐ |
| Focus ring visible on light and dark | Tab through both stories | ☐ |
| Chevron and links visible in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function A(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{A as default};
