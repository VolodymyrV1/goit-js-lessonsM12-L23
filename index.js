import{a}from"./assets/vendor-CWxt7QI6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="https://pokeapi.co/api/v2/pokemon/",d=document.querySelector(".search-form"),u=document.querySelector(".card-container"),n=document.querySelector(".loader");d.addEventListener("submit",p);async function f(r){return(await a(`${l}${r}`)).data}async function p(r){r.preventDefault();const o=r.target.elements.query.value.trim();n.classList.remove("hidden");try{const s=await f(o);console.log(s),u.innerHTML=m(s)}catch(s){y(s)}finally{n.classList.add("hidden")}}function m({name:r,weight:o,height:s,abilities:i,sprites:{front_default:e}}){const t=i.map(({ability:c})=>`
        <li class="list-group-item">${c.name}</li>
    `).join("");return`
        <div class="card">
            <div class="card-img-top">
                <img src="${e}" alt="${r}"/>
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${r}</h2>
                <p class="card-text">Вага: ${o}</p>
                <p class="card-text">Зріст: ${s}</p>


                <p class="card-text">
                    <h4>Вміння: </h4>
                    <ul>
                    ${t}
                    </ul>
                </p>
            
            </div>
        </div>
    `}function y(r){alert(`Oooops, Try again. ${r.message}`)}
//# sourceMappingURL=index.js.map
