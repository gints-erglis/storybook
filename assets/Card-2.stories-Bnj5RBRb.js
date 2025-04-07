import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{a4 as m,a5 as l}from"./index-By4erQL_.js";import{L as g}from"./Link-cta-1-CEhuWD-g.js";import{T as h}from"./Texts-nW5b_30r.js";import"./index-D2MAbzvX.js";import"./iframe-DMWpHdrF.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const x="/storybook/assets/image-1-CEGe4ydW.jpg",t=({mode:e,heading:o,description:d,linkLabel:c,...p})=>(console.log("Card component is rendering"),r.jsxs("div",{className:["card",`card--${e}`,e].join(" "),...p,children:[r.jsx("div",{className:"card__image",children:r.jsx("img",{src:x})}),r.jsxs("div",{className:"card__content",children:[r.jsx("h2",{children:o}),r.jsx("p",{children:d}),r.jsx(g,{label:c||"Read more"})]})]}));t.__docgenInfo={description:"",methods:[],displayName:"Card2",props:{mode:{required:!1,tsType:{name:"string"},description:""},heading:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:""}}};const u=`.card {
  --color-border: #eee;
  --color-background: #fff;

  max-width: 35ch;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: rgba(0, 0, 0, .15) 0px 5px 15px 0px;

  &__image {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    display: flex;

    img {
      max-width: inherit;
      max-height: inherit;
      height: inherit;
      width: inherit;
      object-fit: cover;
    }
  }

  &__content {
    padding: 1rem;
  }

  h2 {
    margin: 0;
  }

  &--aligned {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
    gap: 0;
  }
}`,f=e=>`<div class="card card--${e.direction}"></div>`,E={title:"01-Molecules/Cards/Card-2",component:t,parameters:{layout:"centered",docs:{source:{transform:(e,o)=>f(o.args),language:"html"},page:()=>r.jsxs(r.Fragment,{children:[r.jsx(m,{}),r.jsx("h3",{children:"CSS Code"}),r.jsx(l,{language:"css",dark:"true",code:u})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},n={args:{direction:"vertical",description:h.paragraph1}};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    description: Texts.paragraph1
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const L=["Top"];export{n as Top,L as __namedExportsOrder,E as default};
