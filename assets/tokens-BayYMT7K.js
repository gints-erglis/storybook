import{j as c}from"./jsx-runtime-C8prxwi0.js";import{r as o}from"./index-DkGvG02X.js";const m=({markup:n,init:t})=>{const s=o.useRef(null);return o.useEffect(()=>s.current&&t&&t(s.current)||void 0,[t]),c.jsx("div",{ref:s,dangerouslySetInnerHTML:{__html:n}})},l=(n,t)=>()=>c.jsx(m,{markup:n,init:t}),i=(n,t)=>n.replace(/^([ \t]*)<!-- @(\w+) -->$/gm,(s,a,r)=>r in t?t[r].trim().split(`
`).map(e=>e&&a+e).join(`
`):s),p=n=>i(`<section class="scheme-dark">
  <!-- @content -->
</section>`,{content:n});export{p as d,l as h,i};
