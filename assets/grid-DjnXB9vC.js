import{i as s}from"./tokens-BayYMT7K.js";import{c as i}from"./card-B8mi7PqA.js";const l=`<div class="grid">
  <!-- any items, e.g. cards -->
</div>`,a=[["Native first","Start from HTML that already works, then add only the CSS the design needs."],["One visual language","A handful of tokens for color, space and radius, used everywhere."],["Short enough to read","If a component does not fit on one screen, it is doing too much."]],n=e=>Array.from({length:e},(d,t)=>{const[r,o]=a[t%a.length];return i.replace("Native first",r).replace(/<p>.*<\/p>/,`<p>${o}</p>`).replace("image-1.jpg",t%2?"image-2.jpg":"image-1.jpg")}).join(""),p=e=>s(`<div class="grid">
  <!-- @items -->
</div>`,{items:n(e)});export{l as a,p as g};
