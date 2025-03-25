import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{a4 as c,a5 as i}from"./index-bwIairuU.js";import{C as m}from"./Chevron-BYRvdn4Y.js";import"./index-D2MAbzvX.js";import"./iframe-CNO9qsbn.js";import"../sb-preview/runtime.js";import"./index-DEBVq0NN.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const p=`.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  border-color: inherit;
  content: '';
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
}

.chevron--right::before {
  left: 0;
  transform: rotate(45deg);
}

.chevron--bottom::before {
  top: 0;
  transform: rotate(135deg);
}

.chevron--left::before {
  left: 0.25em;
  transform: rotate(-135deg);
}
`,d=r=>`<span class="chevron chevron--${r.size} chevron--${r.direction}"></span>`,y={title:"Atoms/Arrows/Chevron",component:m,parameters:{layout:"centered",docs:{source:{transform:(r,a)=>d(a.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(i,{language:"css",code:p})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},o={args:{direction:"top",size:"medium",color:"#666"}};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    direction: 'top',
    size: 'medium',
    color: '#666'
  }
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["Top"];export{o as Top,S as __namedExportsOrder,y as default};
