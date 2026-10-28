import{j as e}from"./jsx-runtime-C8prxwi0.js";import{useMDXComponents as a}from"./index-BVXH1tlS.js";import{a4 as r,a6 as t,a5 as s}from"./index-Bug0nMbJ.js";import{H as d,a as l}from"./Header.stories-D7GJ_Emv.js";import{h as c}from"./header-CpuDs9UV.js";import"./index-DkGvG02X.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cqk9686U.js";import"../sb-preview/runtime.js";import"./index-B-vHpnjx.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./tokens-BayYMT7K.js";import"./navigation-BRQETj7m.js";/* empty css               */const h=`.header {
  background: var(--surface);
  color: var(--ink);
}

.header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  max-inline-size: var(--max-width);
  margin-inline: auto;
  padding: var(--space-2) var(--space-3);
}

.header__logo {
  display: block;
  inline-size: 8rem;
  color: inherit;
}

.header__logo svg {
  display: block;
  inline-size: 100%;
  block-size: auto;
}

.header__logo:focus-visible {
  outline: var(--focus);
  outline-offset: 4px;
  border-radius: 2px;
}

/* Narrow screens: the menu button shows the navigation below the bar. */
@media (width < 48rem) {
  .header .nav {
    display: none;
    flex-basis: 100%;
  }

  .header__toggle[aria-expanded="true"] ~ .nav {
    display: block;
  }

  .header .nav > ul {
    flex-direction: column;
  }

  .header .nav__submenu {
    position: static;
    border: 0;
    box-shadow: none;
    background: none;
    padding-block: 0;
  }
}

/* .header prefix: must beat .button's display, whatever order the CSS loads in. */
@media (width >= 48rem) {
  .header .header__toggle {
    display: none;
  }
}
`;function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsxs(n.p,{children:["Logo, ",e.jsx(n.a,{href:"?path=/docs/01-molecules-navigation--docs",children:"Navigation"})," and a “Menu” ",e.jsx(n.a,{href:"?path=/docs/00-atoms-button--docs",children:"Button"})," for narrow screens. Open the Mobile story, or make the window narrower than 48rem."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(s,{language:"html",code:c}),`
`,e.jsx(s,{language:"css",code:h}),`
`,e.jsxs(n.p,{children:["Also needs ",e.jsx(n.code,{children:"button.css"}),", ",e.jsx(n.code,{children:"navigation.css"}),", ",e.jsx(n.code,{children:"disclosure.js"})," and the ",e.jsx(n.a,{href:"?path=/docs/00-constants-tokens--docs",children:"tokens"}),"."]}),`
`,e.jsx(n.h2,{id:"why-it-is-built-this-way",children:"Why it is built this way"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The menu button says “Menu” in words. A visible label is clearer than a hamburger icon and needs no hidden text."}),`
`,e.jsxs(n.li,{children:["It is the same disclosure as the submenu: the header is a ",e.jsx(n.code,{children:"[data-disclosure]"})," scope, and CSS shows the navigation when the button is ",e.jsx(n.code,{children:'aria-expanded="true"'}),". No second script."]}),`
`,e.jsx(n.li,{children:"The button comes before the navigation in the source, so on mobile the tab order matches what you see."}),`
`,e.jsxs(n.li,{children:["The logo is inline SVG with ",e.jsx(n.code,{children:'fill="currentColor"'}),", so it follows the text color (also in a dark band and forced colors). The link is named “Home” with ",e.jsx(n.code,{children:"aria-label"}),", and the SVG itself is hidden from screen readers."]}),`
`,e.jsx(n.li,{children:"No focus trap. The menu is not a modal; users can Tab out, and that closes it."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-checklist",children:"Accessibility checklist"}),`
`,e.jsx(n.p,{children:`| Check | How | Status |
| --- | --- | --- |
| Logo link is announced as “Home, link” | VoiceOver, NVDA | ☐ |
| Mobile: Menu button opens and closes the navigation, state is announced | Keyboard and screen reader, Mobile story | ☐ |
| Mobile: Escape closes the menu and returns focus to the button | Keyboard only | ☐ |
| Tab order follows the visual order at every width | Keyboard only | ☐ |
| Logo and links visible in forced colors | DevTools → Rendering → forced-colors: active | ☐ |
| Works at 200% zoom (switches to the mobile menu) | Browser zoom | ☐ |
| No axe violations | Storybook a11y panel | ☐ |`})]})}function C(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{C as default};
