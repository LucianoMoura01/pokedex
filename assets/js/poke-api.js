
const pokeApi ={}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other['official-artwork'].front_default
    pokemon.height = pokeDetail.height / 10 // converter para metros
    pokemon.weight = pokeDetail.weight / 10 // converter para kg
    
    // Extrair habilidades
    pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    
    // Extrair stats
    pokemon.stats = {
        hp: pokeDetail.stats.find(stat => stat.stat.name === 'hp')?.base_stat || 0,
        ataque: pokeDetail.stats.find(stat => stat.stat.name === 'attack')?.base_stat || 0,
        defesa: pokeDetail.stats.find(stat => stat.stat.name === 'defense')?.base_stat || 0,
        ataqueEsp: pokeDetail.stats.find(stat => stat.stat.name === 'special-attack')?.base_stat || 0,
        defesaEsp: pokeDetail.stats.find(stat => stat.stat.name === 'special-defense')?.base_stat || 0,
        velocidade: pokeDetail.stats.find(stat => stat.stat.name === 'speed')?.base_stat || 0
    }

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokeDetail) => convertPokeApiDetailToPokemon(pokeDetail))
}

pokeApi.getPokemons = (offset = 0, limit = 1025) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

