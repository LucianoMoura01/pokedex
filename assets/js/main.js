console.log('Mão na massa!')

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" id="pokemon">
           <div class="pokemon-header">
                <span class="pokemon-name">${pokemon.name}</span>
                <span class="pokemon-number">#${pokemon.number}</span>
            </div>
            <div class="pokemon-info">
                <ol class="type">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="https://www.smogon.com/dex/media/sprites/xy/${pokemon.name.toLowerCase()}.gif" alt="${pokemon.name}">
           </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
})