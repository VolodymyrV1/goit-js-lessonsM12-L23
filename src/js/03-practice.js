import axios from 'axios';

import '../css/comon.css';
/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд * і отримує всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */



const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breadList = document.querySelector("#breeds-list");
const loader = document.querySelector("#loader");
const catCard = document.querySelector("#cat-card");


form.addEventListener("submit", handleSublit);




fetchBreeds()


function fetchBreeds(){
    axios("https://api.thecatapi.com/v1/breeds")
        .then(res => {
             console.log(res.data);
             breadList.insertAdjacentHTML("beforeend", createDataListOptions(res.data))
        
        })
        .catch(error => {
            console.log(error);
            
        })
}

function createDataListOptions(arr) {
    return arr.map(({ id, name }) => `
        <option value="${name}" data-id="${id}"></option>
    
    
    `).join("")
}


function handleSublit(event) {
    event.preventDefault();
    

    const myBreed = breedInput.value;
    const selectedBreed = [...breadList.options]
    .find((option) => option.value.toLowerCase() === myBreed.toLowerCase().trim())

    if(!selectedBreed) {
        alert("Оберіть існуючу породу");
        return;
    } 
    
    
    const breedId = selectedBreed.dataset.id;
    loader.classList.remove("hidden");
    
    axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(res => {
            if(res.data.length > 0) {
                const catUrl = res.data[0].url;

                catCard.innerHTML = `
                <div class="card">
                    <img src="${catUrl}" alt="${myBreed}" class="card-img"/>
                    <div class="card-title">${myBreed}</div>
                </div>
                `
            } else {
                catCard.innerHTML = `
                <p class="error-text">Зображення не знайдено</p>
                `
            }
            
        })
        .catch(error => {
            console.log(error);
            
        })
        .finally(() => {
            loader.classList.add("hidden");
        })
    


}