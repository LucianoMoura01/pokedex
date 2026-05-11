# Pokédex

Uma aplicação web interativa para explorar e visualizar informações sobre Pokémon, utilizando a PokeAPI para obter dados atualizados e precisos.

## 📋 Descrição

Este projeto é uma Pokédex completa que permite aos usuários navegar por uma vasta coleção de Pokémon, filtrar por tipos, visualizar detalhes individuais e explorar estatísticas. Desenvolvida com tecnologias web modernas, oferece uma experiência intuitiva e responsiva.

## ✨ Funcionalidades

- **Listagem Completa**: Exibe todos os Pokémon disponíveis na PokeAPI
- **Filtragem por Tipo**: Filtre Pokémon por seus tipos (Normal, Fogo, Água, etc.)
- **Detalhes Individuais**: Modal com informações detalhadas de cada Pokémon, incluindo:
  - Estatísticas de combate (HP, Ataque, Defesa, etc.)
  - Altura e peso
  - Habilidades
  - Tipos
- **Interface Responsiva**: Design adaptável para desktop e dispositivos móveis
- **Navegação Intuitiva**: Menu lateral para filtros e navegação fácil

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Lógica da aplicação e interações
- **PokeAPI**: API externa para dados dos Pokémon
- **Phosphor Icons**: Biblioteca de ícones
- **Google Fonts (Roboto)**: Tipografia
- **Normalize.css**: Reset de estilos para consistência cross-browser

## 🚀 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para carregar dados da PokeAPI)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/LucianoMoura01/pokedex.git
   cd pokedex
   ```

2. **Instale as dependências** (opcional, apenas normalize.css):
   ```bash
   npm install
   ```

3. **Abra a aplicação**:
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use o comando npm (se disponível):
     ```bash
     npm start
     ```

## 📱 Como Usar

1. **Navegação Principal**: Use as setas de navegação no header
2. **Filtrar Pokémon**: Clique no ícone de menu (☰) para abrir o painel lateral e selecione um tipo
3. **Visualizar Detalhes**: Clique em qualquer Pokémon da lista para abrir o modal com informações completas
4. **Voltar**: Use a seta para trás para retornar à lista principal

## 📂 Estrutura do Projeto

```
pokedex/
├── index.html              # Arquivo principal da aplicação
├── package.json            # Configurações do projeto e dependências
├── assets/
│   ├── css/
│   │   └── global.css      # Estilos globais da aplicação
│   └── js/
│       ├── main.js         # Lógica principal e interações da UI
│       ├── poke-api.js     # Funções para consumir a PokeAPI
│       └── pokemon-model.js # Modelo de dados do Pokémon
```

## 👨‍💻 Autor

**Luciano Moura**
- GitHub: [@LucianoMoura01](https://github.com/LucianoMoura01)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

*Pokémon é uma marca registrada da Nintendo, Game Freak e Creatures Inc. Este projeto é apenas para fins educacionais e não possui afiliação oficial.*</content>