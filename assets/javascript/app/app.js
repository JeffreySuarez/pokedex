import { getDataApi } from "../api/api.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

(() => {
  getDataApi(url);
})();
