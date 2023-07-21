import { cicloDataPokemon } from "../createCard/createCard.js";
export const listPokemonData = (data) => {
  const urlPokemon = data.url;
  const urlData = async (url) => {
    const result = await fetch(url);
    const resultJson = await result.json();
    const dataUrl = resultJson;
    cicloDataPokemon(dataUrl);
    console.log(dataUrl);
  };
  urlData(urlPokemon);
};
export const cicloArrayData = (pokemonData) => {
  const ciclo = (pokemon) => {
    for (let i of pokemon) {
      listPokemonData(i);
    }
  };
  ciclo(pokemonData);
};
