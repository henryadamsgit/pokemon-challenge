import { pokemonArray } from "./data/pokemon.js";

const cards = document.querySelector(".card-container");

const makeCard = ({ name, types, sprite }) => {
  return `<div class="card">
    <img class="card__image" src=${sprite}>
    <div class="card__content">
        <h2 class="card__heading">${name}</h2>
        <p class="card__text"> ${name} is a ${types.join(", ")} type pokemon</p>
    </div>
  </div>`;
};

const filteredPokemonArray = pokemonArray.filter(
  (pokemon) => pokemon.id >= 1 && pokemon.id <= 151
);

filteredPokemonArray.forEach((pokemon) => {
  cards.innerHTML += makeCard(pokemon);
});
