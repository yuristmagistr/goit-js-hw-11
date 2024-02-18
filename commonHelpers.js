import{i as a,S as g}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelector(".form"),p=document.querySelector(".gallery"),u=document.querySelector(".loader");h.addEventListener("submit",d);function d(i){i.preventDefault();const o=i.target.elements.query.value;if(o.trim()==="")return a.error({message:"Please enter a search query.",position:"topRight"});u.style.display="inline-block",b(o),i.target.reset()}function b(i){const o="https://pixabay.com/api/",n="?key=42435479-889f1388d96929484f40a1796",l=`&q=${i}`,e="&image_type=photo",t="&orientation=horizontal",s="&safesearch=true",c=o+n+l+e+t+s;return fetch(c).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r&&r.hits&&r.hits.length>0?S(r):a.error({message:"Sorry, there are no images matching <br/>your search query. Please try again!",position:"topRight"})}).catch(r=>{console.error("Error:",r)}).finally(()=>{u.style.display="none"})}function S(i){const o=i.hits.map(e).join("");p.innerHTML=o,document.querySelectorAll(".gallery-link").forEach(t=>{t.setAttribute("href",t.querySelector("img").getAttribute("src"))}),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh();function e({largeImageURL:t,webformatURL:s,tags:c,likes:r,views:f,comments:m,downloads:y}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${c}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${r}</li></ul>
      <ul>Views<li>${f}</li></ul>
      <ul>Comments<li>${m}</li></ul>
      <ul>Downloads<li>${y}</li></ul>
    </div>
  </li>`}}
//# sourceMappingURL=commonHelpers.js.map
