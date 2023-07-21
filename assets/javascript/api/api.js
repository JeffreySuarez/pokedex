import { cicloArrayData } from "../resultsPokemonData/resultsPokemonData.js";

export const getDataApi = async (url) => {
  const result = await fetch(url);
  const resultJson = await result.json();
  const data = resultJson.results;
  cicloArrayData(data);
};
