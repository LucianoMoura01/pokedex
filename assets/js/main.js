console.log('Mão na massa!');

const pokemonTypes = {
    "Bulbasaur": "grass",
    "Ivysaur": "grass",
    "Venusaur": "grass",
    "Charmander": "fire",
    "Charmeleon": "fire",
    "Charizard": "fire",
    "Squirtle": "water",
    "Wartortle": "water",
    "Blastoise": "water",
    "Pikachu": "electric"
};

const items = document.querySelectorAll('#pokemon-list-items li');

items.forEach((item) => {
    const name = item.innerText; 
    const type = pokemonTypes[name]; 

    if (type) {
        item.classList.add(`type-${type}`); 
    }
});