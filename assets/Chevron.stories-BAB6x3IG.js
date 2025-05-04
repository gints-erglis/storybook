import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{a4 as i,a5 as m}from"./index-B6Xlxz_A.js";import{C as c}from"./Chevron-BYRvdn4Y.js";import"./index-D2MAbzvX.js";import"./iframe-BPl2iya4.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const p=`.chevron::before {
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
`,d=r=>`<span class="chevron chevron--${r.size} chevron--${r.direction}"></span>`,S={title:"00-Atoms/Arrows/Chevron",component:c,parameters:{layout:"centered",docs:{source:{transform:(r,a)=>d(a.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(m,{language:"css",dark:"true",code:p})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},o={args:{direction:"top",size:"medium",color:"#666"}};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    direction: 'top',
    size: 'medium',
    color: '#666'
  }
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const w=["Top"];export{o as Top,w as __namedExportsOrder,S as default};
