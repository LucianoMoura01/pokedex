console.log('Mão na massa!')

const offset = 0
const limit = 20

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToLi(pokemon) {
    return`
        <li class="pokemon" id="grass">
            <div class="pokemon-header">
                <span class="pokemon-name">${pokemon.name}</span>
                <span class="pokemon-number">#${pokemon.number}</span>
            </div>
            <div class="pokemon-info">
                <ol class="type">
                    <li class="type_grass">Grass</li>
                    <li class="type_poison">Poison</li>
                </ol>
                <img src="https://www.smogon.com/dex/media/sprites/xy/${pokemon.name}.gif" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then ((response) => response.json())
    .then ((jsonBody) => jasonBody.results)
    .then ((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })

    .catch((error) => console.error(error))

    .finally(function() {
        console.log('Requisição finalizada!')
    })
