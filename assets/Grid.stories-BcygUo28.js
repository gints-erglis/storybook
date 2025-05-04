import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{G as m,C as a}from"./Card-1-CMCk0_Dj.js";import{a4 as l,a5 as p}from"./index-D02HGfX7.js";import{T as r}from"./Texts-nW5b_30r.js";import"./index-D2MAbzvX.js";import"./Link-cta-1-CEhuWD-g.js";import"./iframe-CwnmViXT.js";import"../sb-preview/runtime.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const g=`.grid-auto-fit {
  display: grid;
  /* Instead of this */
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns:
    repeat(auto-fit, minmax(min(30ch, 100%), 1fr));
  gap: 2rem;

  &.sb-small {
    grid-template-columns:
    repeat(auto-fit, minmax(min(20ch, 100%), 1fr));
  }

  &.sb-large {
    grid-template-columns:
    repeat(auto-fit, minmax(min(40ch, 100%), 1fr));
  }
}
`,c=o=>'<div class="grid grid-auto-fit"></div>',z={title:"04-Templates/Grid/Grid-autofit",component:m,parameters:{layout:"centered",docs:{source:{transform:(o,s)=>c(s.args),language:"html"},page:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx("h3",{children:"CSS Code"}),e.jsx(p,{language:"css",dark:"true",code:g})]})}},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["small","medium","large"],description:"Sets the item size inside the grid.",table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}}}},i={args:{size:"medium",className:"grid-auto-fit",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph1}),e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph2}),e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph3}),e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph1}),e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph2}),e.jsx(a,{mode:"aligned",heading:"Card title",linkLabel:"Read more",description:r.paragraph3})]})}};var t,d,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    className: 'grid-auto-fit',
    children: <>
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph1} />
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph2} />
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph3} />
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph1} />
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph2} />
        <Card mode="aligned" heading="Card title" linkLabel="Read more" description={Texts.paragraph3} />
      </>
  }
}`,...(n=(d=i.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const G=["Autofit"];export{i as Autofit,G as __namedExportsOrder,z as default};
