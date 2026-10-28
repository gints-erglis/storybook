import{h as p,d as o}from"./tokens-BayYMT7K.js";const r=`<label class="choice"><input type="checkbox"> Email me about updates</label>
<label class="choice"><input type="checkbox" checked> Remember this device</label>
<label class="choice"><input type="checkbox" disabled> Not available</label>

<label class="choice"><input type="radio" name="plan" checked> Monthly</label>
<label class="choice"><input type="radio" name="plan"> Yearly</label>
`,i={title:"00-Atoms/Checkbox and radio",render:p(r),parameters:{layout:"centered",docs:{source:{code:r,language:"html"}}}},e={},a={render:p(o(r)),parameters:{docs:{source:{code:o(r)}}}};var c,s,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,l,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: html(darkBand(markup)),
  parameters: {
    docs: {
      source: {
        code: darkBand(markup)
      }
    }
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const m=["CheckboxAndRadio","DarkBand"],b=Object.freeze(Object.defineProperty({__proto__:null,CheckboxAndRadio:e,DarkBand:a,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{b as C,a as D,e as a,r as m};
