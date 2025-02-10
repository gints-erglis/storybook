import{f as A}from"./index-DQLiMaGX.js";import{j as h}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";const y=({primary:f=!1,size:L="medium",label:C,...T})=>{const b=f?"link-cta--primary":"link-cta--secondary";return h.jsx("a",{className:["link-cta",`link-cta--${L}`,b].join(" "),...T,children:C})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"LinkCta1",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const z={title:"Example/01-Atoms/Links/Link-CTA/Link-CTA-1",component:y,parameters:{layout:"centered",docs:{source:{type:"dynamic"}}},tags:["autodocs"],args:{onClick:A()}},e={args:{primary:!0,label:"Link CTA"}},a={args:{label:"Link CTA"}},r={args:{size:"large",label:"Link CTA"}},s={args:{size:"small",label:"Link CTA"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Link CTA'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Link CTA'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Link CTA'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Link CTA'
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const j=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,s as Small,j as __namedExportsOrder,z as default};
