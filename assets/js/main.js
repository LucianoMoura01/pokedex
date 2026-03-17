console.log('Mão na massa!')

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


pokeApi.getPokemons().then((pokemons) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })
    
    const newHtml = newList.jpin('')

    pokemonList.innerHTML += newHtml

})