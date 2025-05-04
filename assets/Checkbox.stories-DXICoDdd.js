import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{a4 as k,a5 as x}from"./index-pdSx1ECB.js";import"./index-D2MAbzvX.js";import"./iframe-BYue7cQg.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function f(){return"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).substr(2,5)}const g=({id:r=f(),size:t="medium",color:v,label:b,...w})=>e.jsxs("div",{className:["checkbox-2",`checkbox--${t}`].join(" "),children:[e.jsx("input",{id:r,type:"checkbox"}),e.jsx("label",{htmlFor:r,children:b})]});g.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"generateId()",computed:!0}},color:{required:!1,tsType:{name:"string"},description:"What color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the checkbox be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Checkbox label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const y=`.checkbox-2 {
  display: flex;
  align-items: center;
  gap: .5rem;

  &.checkbox--small {
    input[type=checkbox] {
      width: 1rem;
      height: 1rem;

      &:checked {
        background-size: .6rem;
      }
    }
  }

  &.checkbox--medium {
    input[type=checkbox] {
      width: 1.4rem;
      height: 1.4rem;

      &:checked {
        background-size: .7rem;
      }
    }
  }

  &.checkbox--large {
    input[type=checkbox] {
      width: 1.6rem;
      height: 1.6rem;

      &:checked {
        background-size: .8rem;
      }
    }
  }

  input[type=checkbox] {
    appearance: none;
    border-width: 1px;
    border-color: #999;
    border-style: solid;
    background-color: #f5f5f5;

    &:checked {
      background-color: #535bf2;
      background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
`,C=r=>`<div class="checkbox checkbox--${r.size}">
  <input  id="1" type="checkbox">
  <label for="1">${r.label}</label>
</div>`,D={title:"00-Atoms/Forms/Checkboxes/Checkbox-2",component:g,parameters:{layout:"centered",docs:{description:{story:"This is a custom checkbox style."},source:{transform:(r,t)=>C(t.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(x,{language:"css",dark:"true",code:y})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},n={args:{size:"small",label:"Custom checkbox"}},o={args:{size:"medium",label:"Custom checkbox"}},a={args:{size:"large",label:"Custom checkbox"}};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Custom checkbox'
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Custom checkbox'
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Custom checkbox'
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["Small","Middle","Large"];export{a as Large,o as Middle,n as Small,E as __namedExportsOrder,D as default};
