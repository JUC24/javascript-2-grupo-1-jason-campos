const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonDetail = document.getElementById('pokemon-detail');
const url = "https://pokeapi.co/api/v2/pokemon?offset=110&limit=100"


function getPokemonNames(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.classList.add("pokemonNameOption")
        option.value = pokemon.url;
        option.text = pokemon.name;
        pokemonSelect.add(option);
      });
    })
    .catch(error => console.log(error));
}

function getPokemonDetails(url){
  fetch(url)
    .then(response => response.json())
    .then(data => {
      pokemonDetail.innerHTML = `
      <div class="pokeCard">
        <h2>${data.name}</h2>
        <div class="pokemonImage">
          <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
        </div>
        <div class="pokemonData">
          <div class="pokemonHabilities">
            <span>Habilidades</span>
            <p>${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
          </div>
          <div class="pokemonStats">
            <p>Height: ${data.height} cm</p>
            <p>Weight: ${data.weight / 10} kilogramos</p>
          </div>
        </div>
      </div>  
      `;
    });
}

pokemonSelect.addEventListener('change', event => {
  const PokeNameSelect = event.target.value;
  getPokemonDetails(PokeNameSelect);
});

getPokemonNames(url);
getPokemonDetails(url)