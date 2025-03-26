import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{a4 as d,a5 as c}from"./index-mTHBCkKG.js";import"./index-D2MAbzvX.js";import"./iframe-CUUz2XRm.js";import"../sb-preview/runtime.js";import"./index-DEBVq0NN.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const m=({size:r="medium",direction:n="bottom",color:i,...l})=>e.jsx("span",{className:["arrow",`arrow--${r}`,`arrow--${n}`].join(" "),style:{color:i},...l});m.__docgenInfo={description:"",methods:[],displayName:"Arrow1",props:{color:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left' | 'top-right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'top-right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}}}};const p=`.arrow {
  --color: #222;

  position: relative;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  text-decoration: none;
  color: var(--color);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
  }

  &::before {
    top: 50%;
    right: 0.2rem;
    width: 1rem;
    height: 1rem;
    transform-origin: 50% 50%;
    transform: translate(0, -0.5rem) rotate(45deg);
    box-shadow: inset -0.125rem .125rem 0 0 currentColor;
    border-radius: 0 .15rem 0 0;
  }

  &::after {
    top: 50%;
    right: 0.2rem;
    width: 1.3rem;
    height: .125rem;
    transform: translate(0, -0.07rem);
    background-color: currentColor;
  }

  &--large {
    // Show your best!
  }

  &--small {
    width: 1rem;
    height: 1rem;

    &::before {
      right: 0.1rem;
      width: .6rem;
      height: .6rem;
      transform: translate(0, -0.3rem) rotate(45deg);
    }

    &::after {
      right: 0.1rem;
      width: .78rem;
      height: .125rem;
    }
  }

  &--left {
    transform: rotate(-180deg);
  }

  &--top-right {
    transform: rotate(-45deg);
  }

  &--top {
    transform: rotate(-90deg);
  }

  &--bottom {
    transform: rotate(90deg);
  }
}
`,u=r=>`<span class="arrow arrow--${r.size} arrow--${r.direction}"></span>`,C={title:"Atoms/Arrows/Arrow1",component:m,parameters:{layout:"centered",docs:{source:{transform:(r,n)=>u(n.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(c,{language:"css",code:p})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},t={args:{direction:"top",size:"medium",color:"#666"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    direction: 'top',
    size: 'medium',
    color: '#666'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const T=["Top"];export{t as Top,T as __namedExportsOrder,C as default};
