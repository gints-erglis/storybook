import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{a4 as x,a5 as k}from"./index-QpdbU3Y5.js";import"./index-D2MAbzvX.js";import"./iframe-DJorWeLE.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function y(){return"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).substr(2,5)}const g=({id:r=y(),size:t="medium",color:j,label:b,...v})=>e.jsxs("div",{className:["checkbox-1",`checkbox--${t}`].join(" "),children:[e.jsx("input",{id:r,type:"checkbox"}),e.jsx("label",{htmlFor:r,children:b})]});g.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"generateId()",computed:!0}},color:{required:!1,tsType:{name:"string"},description:"What color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the checkbox be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Checkbox label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const f=`.checkbox-1 {
  display: flex;
  align-items: center;
  gap: .5rem;

  &.checkbox--small {
    input[type=checkbox] {
      width: 1rem;
      height: 1rem;
    }
  }

  &.checkbox--medium {
    input[type=checkbox] {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  &.checkbox--large {
    input[type=checkbox] {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
`,C=r=>`<div class="checkbox checkbox--${r.size}">
  <input  id="1" type="checkbox">
  <label for="1">${r.label}</label>
</div>`,D={title:"00-Atoms/Forms/Checkboxes/Checkbox-1",component:g,parameters:{layout:"centered",docs:{description:{story:"This is a styled checkbox style."},source:{transform:(r,t)=>C(t.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(k,{language:"css",dark:"true",code:f})]})}},tags:["autodocs"],argTypes:{color:{control:"color"}}},o={args:{size:"small",label:"Custom checkbox"}},a={args:{size:"medium",label:"Custom checkbox"}},s={args:{size:"large",label:"Custom checkbox"}};var n,c,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Custom checkbox'
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Custom checkbox'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Custom checkbox'
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["Small","Medium","Large"];export{s as Large,a as Medium,o as Small,E as __namedExportsOrder,D as default};
