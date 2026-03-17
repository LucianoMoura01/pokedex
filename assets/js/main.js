console.log('Mão na massa!')

const offset = 0
const limit = 20

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon" id="pokemon">
           <div class="pokemon-header">
                <span class="pokemon-name">${pokemon.name}</span>
                <span class="pokemon-number">#001</span>
            </div>
            <div class="pokemon-info">
                <ol class="type">
                    <li class="race">Grass</li>
                    <li class="attack">Poison</li>
                </ol>
                <img src="https://www.smogon.com/dex/media/sprites/xy/${pokemon.name.toLowerCase()}.gif" alt="${pokemon.name}">
           </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

fetch(url)
    .then ((response) => response.json())
    .then ((jsonBody) => jsonBody.results)
    .then ((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })

    .catch((error) => console.error(error))
