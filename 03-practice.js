import"./assets/comon-JAgE4AwN.js";import{a as n}from"./assets/vendor-CWxt7QI6.js";const l=document.querySelector("#search-form"),u=document.querySelector("#breed-input"),d=document.querySelector("#breeds-list"),r=document.querySelector("#loader"),c=document.querySelector("#cat-card");l.addEventListener("submit",h);m();function m(){n("https://api.thecatapi.com/v1/breeds").then(e=>{console.log(e.data),d.insertAdjacentHTML("beforeend",p(e.data))}).catch(e=>{console.log(e)})}function p(e){return e.map(({id:a,name:o})=>`
        <option value="${o}" data-id="${a}"></option>
    
    
    `).join("")}function h(e){e.preventDefault();const a=u.value,o=[...d.options].find(t=>t.value.toLowerCase()===a.toLowerCase().trim());if(!o){alert("Оберіть існуючу породу");return}const s=o.dataset.id;r.classList.remove("hidden"),n(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}`).then(t=>{if(t.data.length>0){const i=t.data[0].url;c.innerHTML=`
                <div class="card">
                    <img src="${i}" alt="${a}" class="card-img"/>
                    <div class="card-title">${a}</div>
                </div>
                `}else c.innerHTML=`
                <p class="error-text">Зображення не знайдено</p>
                `}).catch(t=>{console.log(t)}).finally(()=>{r.classList.add("hidden")})}
//# sourceMappingURL=03-practice.js.map
