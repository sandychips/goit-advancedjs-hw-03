/* empty css                      */import{S as m,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const o={gallery:document.querySelector(".gallery"),form:document.querySelector(".query-form"),loader:document.querySelector(".loader")},f="47934856-127240b78ee1c1893a576f39c",c="query",y={overlay:!0,overlayOpacity:1,captions:!0,captionPosition:"bottom",captionType:"attr",captionsData:"alt",captionDelay:250},d="https://pixabay.com/api";function g(a){const t=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function h(a){return a.map(({webformatURL:t,tags:s,likes:n,views:e,comments:r,downloads:l,largeImageURL:p})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${p}">
                    <img class="gallery-image" src="${t}" alt="${s}" height=312 width=200>
                    <ul class="statistics">
                        <li class="stat-element">
                            <p class="stat-name">Likes</p>
                            <p class="stat-value">${n}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Views</p>
                            <p class="stat-value">${e}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Comments</p>
                            <p class="stat-value">${r}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Downloads</p>
                            <p class="stat-value">${l}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}let i=w(o.form);o.form.addEventListener("input",S);o.form.addEventListener("submit",v);const L=new m(".gallery li a",y);function S(a){i=a.target.value.trim(),localStorage.setItem(c,i)}function v(a){a.preventDefault(),i&&(o.gallery.innerHTML="",o.loader.style.display="block",g(i).then(({hits:t})=>{o.loader.style.display="none",t.length?(o.gallery.innerHTML=h(t),L.refresh()):u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{u.error({message:"There was an error while loading pictures. Please try again!",position:"topRight"}),console.error(t)}).finally(()=>{i="",localStorage.removeItem(c),o.form.reset()}))}function w(a){const t=localStorage.getItem(c);if(t)return a.elements.query.value=t,t||""}
//# sourceMappingURL=index.js.map
