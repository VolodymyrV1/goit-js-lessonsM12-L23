import axios from "axios";

import '../css/comon.css'

// const url = "https://jsonplaceholder.typicode.com/todos";



// async function foo(){
//     return "lalala"
// }


// foo()
//     .then(data => console.log(data))
//     .catch(er => console.log(er))

//=======
// async function foo() {
//     try {
//         const response = await axios(url);
//         console.log(response);
//     } catch(error) {
//         console.log(error.message)   
//     }        
// }

// foo()


//======
// async function foo() {
//     const response = await axios(url);
//     return response.data;
// }

// foo()
//     .then(d => console.log(d)
//     )
//     .catch(e => console.log(e)
//     );



//=====
// async function foo() {
//     const response = await axios(url);
//     return response.data;
// }

// async function result(){
//     try {
//         const data = await foo();
//         console.log("result", data);
//     } catch(error) {
//         console.log(error);   
//     }
// }

// result()



//=====
// const url = "https://jsonplaceholder.typicode.com/todos";

// async function getTodos() {
//     const todo1 = await axios(`${url}/1`)
//     const todo2 = await axios(`${url}/2`)
//     const todo3 = await axios(`${url}/3`)

//     return [todo1.data, todo2.data, todo3.data]

// }


// getTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


//====
// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const todoRes = todosArr.map(async (num) => {
//         const response = await axios(`${url}/${num}`);
//         return response.data;
//     })

//     const res = await Promise.all(todoRes);
//     return res;      
// }

// getTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



//====
// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     try {
//         const todoRes = todosArr.map(async (num) => {
//         const response = await axios(`${url}/${num}`);
//         return response.data;
//     })

//     const res = await Promise.all(todoRes);
//     console.log(res);

//     } catch(error) {
//         console.log(error.message); 
//     }
// }

// getTodos();



//====
// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const todoRes = todosArr.map(async (num) => {
//         const response = await axios(`${url}/${num}`);
//         return response.data;
//     })

//     const res = await Promise.all(todoRes);
//     return res;      
// }

// async function foo() {
//     try {
//         const data = await getTodos();
//         console.log(data);
//     } catch(error) {
//         console.log(error.message);  
//     } finally {
//         console.log("ok"); 
//     }
// }

// foo()






/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const form = document.querySelector(".search-form");
const container = document.querySelector(".card-container");


form.addEventListener("submit", onSearch);


async function fetchPokemon(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}


async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();

    try {
        const data = await fetchPokemon(searchQuery);
        console.log(data);
        

    } catch(error) {
        alert(error.message)
    }
}


function renderPokemonCard({ name, weight, height, abilities, sprites: { front_default } }) {

    return `
        <div>
            <div>
            <img src="${front_default}" alt="${name}" />
            </div>
            <div class=""card-body>
                <h2 class="card-title">${name}</h2>
                <p class="card-text">${weight}</p>
                <p class="card-text">${height}</p>


                <p class="card-text">
                    <h4></h4>
                    <ul>
                    </ul>
                </p>
            
            </div>
        </div>
    `

}