import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{a4 as m,a5 as l}from"./index-pdSx1ECB.js";import{L as g}from"./Link-cta-1-CEhuWD-g.js";import{T as h}from"./Texts-nW5b_30r.js";import"./index-D2MAbzvX.js";import"./iframe-BYue7cQg.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const t=({mode:e,heading:a,description:d,linkLabel:c,...p})=>(console.log("Card component is rendering"),r.jsxs("div",{className:["card",`card--${e}`,e].join(" "),...p,children:[r.jsx("div",{className:"card__image",children:r.jsx("img",{src:"/images/image-1.jpg",alt:"Description"})}),r.jsxs("div",{className:"card__content",children:[r.jsx("h2",{children:a}),r.jsx("p",{children:d}),r.jsx(g,{label:c||"Read more"})]})]}));t.__docgenInfo={description:"",methods:[],displayName:"Card2",props:{mode:{required:!1,tsType:{name:"string"},description:""},heading:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:""}}};const x=`.card {
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
}`,u=e=>`<div class="card card--${e.direction}"></div>`,S={title:"01-Molecules/Cards/Card-2",component:t,parameters:{layout:"centered",docs:{source:{transform:(e,a)=>u(a.args),language:"html"},page:()=>r.jsxs(r.Fragment,{children:[r.jsx(m,{}),r.jsx("h3",{children:"CSS Code"}),r.jsx(l,{language:"css",dark:"true",code:x})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},n={args:{direction:"vertical",description:h.paragraph1}};var i,o,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    description: Texts.paragraph1
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const L=["Vertical"];export{n as Vertical,L as __namedExportsOrder,S as default};
