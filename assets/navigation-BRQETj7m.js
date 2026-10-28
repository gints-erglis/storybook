function l(i=document){const o=new AbortController,{signal:t}=o;for(const a of i.querySelectorAll("[data-disclosure]")){const n=a.querySelector(":scope > button[aria-expanded]");if(!n)continue;const s=()=>n.getAttribute("aria-expanded")==="true",r=e=>n.setAttribute("aria-expanded",String(e));n.addEventListener("click",()=>r(!s()),{signal:t}),a.addEventListener("keydown",e=>{e.key!=="Escape"||!s()||(e.stopPropagation(),r(!1),n.focus())},{signal:t}),a.addEventListener("focusout",e=>{e.relatedTarget&&!a.contains(e.relatedTarget)&&r(!1)},{signal:t}),document.addEventListener("click",e=>{a.contains(e.target)||r(!1)},{signal:t})}return()=>o.abort()}const c=`<nav class="nav" aria-label="Main">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">About</a></li>
    <li class="nav__item" data-disclosure>
      <button type="button" aria-expanded="false">User area</button>
      <ul class="nav__submenu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </li>
  </ul>
</nav>
`;export{l as d,c as n};
