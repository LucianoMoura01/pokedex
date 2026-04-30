let allPokemons = [];
let currentFilter = 'all';

// Inicializar menu fechado
function initializMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    highlightActiveFilter();
}

// Chamar inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', initializMenu);

function goBack() {
    // Fechar menu se estiver aberto
    closeMenu();
    
    // Resetar filtro para 'all'
    currentFilter = 'all';
    const pokemonList = document.getElementById('pokemonList');
    const newHtml = allPokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
    highlightActiveFilter();
    
    // Voltar no histórico do navegador
    if (window.history.length > 1) {
        history.back();
    }
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="openPokemonModal('${pokemon.number}')">
           <div class="pokemon-header">
                <span class="pokemon-name">${pokemon.name}</span>
                <span class="pokemon-number">#${pokemon.number}</span>
            </div>
            <div class="pokemon-info">
                <ol class="type">
                    ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
           </div>
        </li>
    `
}

function openPokemonModal(pokemonNumber) {
    closeMenu();
    
    const pokemon = allPokemons.find(p => p.number == pokemonNumber);
    if (!pokemon) return;
    
    const typesList = pokemon.types.map(type => `<span class="type-tag">${type}</span>`).join('');
    const abilitiesList = pokemon.abilities.join(', ');
    
    const modalHTML = `
        <div class="modal-header ${pokemon.type}">
            <button class="modal-close" onclick="closePokemonModal()"><i class="ph ph-x"></i></button>
            <img src="${pokemon.photo}" alt="${pokemon.name}" class="modal-image">
        </div>
        <div class="modal-body">
            <h2 class="modal-title">${pokemon.name}</h2>
            <p class="modal-number">#${String(pokemon.number).padStart(4, '0')}</p>
            
            <div class="modal-section">
                <h3>Tipos</h3>
                <div class="types-container">${typesList}</div>
            </div>
            
            <div class="modal-section">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Altura</span>
                        <span class="info-value">${pokemon.height}m</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Peso</span>
                        <span class="info-value">${pokemon.weight}kg</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Habilidades</h3>
                <p>${abilitiesList || 'N/A'}</p>
            </div>
            
            <div class="modal-section">
                <h3>Estatísticas</h3>
                <div class="stats-container">
                    <div class="stat-item">
                        <span class="stat-name">HP</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.hp / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.hp}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Ataque</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.ataque / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.ataque}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Defesa</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.defesa / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.defesa}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Ataque Esp.</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.ataqueEsp / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.ataqueEsp}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Defesa Esp.</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.defesaEsp / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.defesaEsp}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Velocidade</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${(pokemon.stats.velocidade / 150) * 100}%"></div>
                        </div>
                        <span class="stat-value">${pokemon.stats.velocidade}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = modalHTML;
    
    const modal = document.getElementById('pokemonModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePokemonModal(event) {
    // Se foi passado um event, checa se foi clique no overlay (fora do conteúdo)
    if (event && event.target.id !== 'pokemonModal') {
        return;
    }
    
    const modal = document.getElementById('pokemonModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function highlightActiveFilter() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-type="${currentFilter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function filterByType(type) {
    currentFilter = type;
    highlightActiveFilter();
    
    // Filtrar pokémons
    const pokemonList = document.getElementById('pokemonList');
    let filtered = allPokemons;
    
    if (type !== 'all') {
        filtered = allPokemons.filter(pokemon => pokemon.type === type);
    }
    
    const newHtml = filtered.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
    
    // Fechar menu
    closeMenu();
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    allPokemons = pokemons;
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
})