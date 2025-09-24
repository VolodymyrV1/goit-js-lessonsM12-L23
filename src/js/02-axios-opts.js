import axios from 'axios';

import '../css/comon.css';

//** 
//* Робимо рефакторинг автоматизації запитів з ключами

//* Як у Axios передавати perems та headers


//* Для прикладу використовуємо https://pixabay.com/api/docs/


//*
const API_KEY = "43173775-fc7269b10cca3a5d436001063";
// const list = document.querySelector(".list")


///====
// axios("https://pixabay.com/api/", {
//     params: {
//         key: API_KEY,
//         q: "rose"
//     }
// })
//     .then(res => {
//         console.log(res);
//         list.insertAdjacentHTML("beforeend", createMarkup(res.data.hits))
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })


//     function createMarkup(arr) {
//         return arr.map(({ previewURL, tags }) => `
//             <li>
//                 <img src="${previewURL}" alt="${tags}" width="300"/>
//             </li>
        
        
        
        
//         `).join("")
//     }



//=====

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// axios.defaults.headers.common["Authorization"] = "Lalalala";

// axios('/users')
//     .then(res => {
//         console.log(res.data);
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })

// axios('/todos')
//     .then(res => {
//         console.log(res.data);
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })


//=====


// const instance = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com/",
//     headers: {
//         Authorization: "lalala"
//     }
    
// })


// instance("/users")
//     .then(res => {
//         console.log(res.data);
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })
// instance("/todos")
//     .then(res => {
//         console.log(res.data);
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })

