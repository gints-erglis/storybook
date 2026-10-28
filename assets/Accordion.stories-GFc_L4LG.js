import{j as p}from"./jsx-runtime-BjgbQsUx.js";const m=l=>()=>p.jsx("div",{dangerouslySetInnerHTML:{__html:l}}),r=`<div class="accordion">
  <details name="faq" open>
    <summary>What makes a component well made?</summary>
    <div class="accordion__body">
      <p>It is correct, elementary, beautiful and short enough to read on one screen.</p>
    </div>
  </details>
  <details name="faq">
    <summary>Does it need JavaScript?</summary>
    <div class="accordion__body">
      <p>No. The browser handles opening, closing, keyboard and screen reader support.</p>
    </div>
  </details>
  <details name="faq">
    <summary>Can I paste it into Twig or SDC?</summary>
    <div class="accordion__body">
      <p>Yes. It is plain HTML and CSS with no framework and no dependencies.</p>
    </div>
  </details>
</div>
`,n=`<section class="scheme-dark">
${r.trim().replace(/^/gm,"  ")}
</section>`,u={title:"01-Molecules/Accordion",render:m(r),parameters:{layout:"padded",docs:{source:{code:r,language:"html"}}}},e={},a={render:m(n),parameters:{docs:{source:{code:n,language:"html"}}}};var o,s,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var t,c,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: html(darkMarkup),
  parameters: {
    docs: {
      source: {
        code: darkMarkup,
        language: 'html'
      }
    }
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["Accordion","DarkBand"],_=Object.freeze(Object.defineProperty({__proto__:null,Accordion:e,DarkBand:a,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{_ as A,a as D,e as a,r as m};
