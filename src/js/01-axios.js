import axios from 'axios';

import '../css/comon.css';

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * Обробка відповіді та помилки
 */

// const url = "https://jsonplaceholder.typicode.com/todos";
// const list = document.querySelector(".todo-list");

// Для пригадування
// fetch(url)
//     .then(res => {
//         if(!res.ok) {
//             throw new Error("Oooops")
//         }

//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data));
        
//     })
//     .catch(error => {
//         console.log(error);
        
//     })


    // function createMarkup(arr) {
    //     return arr.map(({ title, completed }) => `
    //     <li class="list-item">
    //         <input type="checkbox" ${completed && "checked"} />
    //         <p>${title}</p>
    //     </li>
        
    //     `).join("")
    // }



///
// axios(url)
//     .then((res) => {
//         console.log(res);
//         list.insertAdjacentHTML("beforeend", createMarkup(res))
            
//     })
//     .catch(error => {
//         console.log(error);
//         alert(error.message)
        
//     })

///=====
// axios.get(url)
//     .then((res) => {
//         console.log(res);
//         list.insertAdjacentHTML("beforeend", createMarkup(res))
            
//     })
//     .catch(error => {
//         console.log(error);
//         alert(error.message)
//     })

//**
// Всередині функції запит, зовні обробка
 
// const fetchData = (url) => {
//     return axios(url);
// }


// fetchData(url)
//         .then((res) => {
//         console.log(res);  
//         list.insertAdjacentHTML("beforeend", createMarkup(res.data)) 

//     })
//     .catch(error => {
//         console.log(error);
//     })

 
