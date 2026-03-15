console.log('Mão na massa!')

const offset = 0
const limit = 20

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//Promisses são objetos que representam o resultado de uma operação assíncrona. Elas podem estar em um dos seguintes estados:

fetch(url)
    .then ((response) => response.json())
    .then ((jsonBody) => console.log(jsonBody))

    .catch((error) => console.error(error))

    .finally(function() {
        console.log('Requisição finalizada!')
    })
