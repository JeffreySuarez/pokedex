import { getColorFromTypeOne, getColorFromTypeTwo } from "../getColor/getColor.js";

const contentCards = document.querySelector(".content-cards");

export const cicloDataPokemon = (dataPokemon) => {
  const name = dataPokemon.name;
  const id = dataPokemon.id;
  const img = dataPokemon.sprites.other["official-artwork"].front_default;
  const pokeBallImg = "../../img/pokeball/pokeball@2x.png";

  // ***
  let typeOne = dataPokemon.types.map((type) => `${type.type.name}`);
  typeOne = typeOne[0];
  console.log(typeOne);

  let typeTwo = dataPokemon.types.map((type) => `${type.type.name}`);
  typeTwo = typeTwo[1];
  console.log(typeTwo);

  const typeColorTwo = getColorFromTypeTwo(typeTwo);
  console.log(typeColorTwo);

  const typeColorOne = getColorFromTypeOne(typeOne);
  console.log(typeColorOne);

  // ***
  const card = document.createElement("div");
  card.className = "card";
  card.style = `background-color: ${typeColorOne}c5`;

  const divContentLeft = document.createElement("div");
  divContentLeft.className = "content-left";

  const nameCard = document.createElement("h2");
  nameCard.className = "card-name";
  nameCard.innerHTML = name.charAt(0).toUpperCase() + name.slice(1, name.lenght); //Colocar la primera letra del name en mayuscula

  // *** Id Card
  const contentIdCard = document.createElement("div");
  contentIdCard.className = "content-Id-Card";

  const idCard = document.createElement("p");
  idCard.className = "id-card";
  idCard.innerHTML = `#00${id}`;

  // *** Imagen Card

  const contentImg = document.createElement("div");
  contentImg.className = "content-img";

  const imgCard = document.createElement("img");
  imgCard.src = img;

  // *** Tipo Card

  const contentType = document.createElement("div");
  contentType.classList = `type-pokemon`;
  // contentType.innerHTML = type;
  // contentType.style = `background-color: ${typeColor}`;

  const typeDivOne = document.createElement("p");
  typeDivOne.classList = "type";
  typeDivOne.innerHTML = typeOne;
  typeDivOne.style = `background-color: ${typeColorOne}`;

  const pokeBall = document.createElement("div");
  pokeBall.className = "pokeBall";
  pokeBall.innerHTML = `<i class="fas fa-circle" style= "color:${typeColorOne};"></i>`;

  const typeDivTwo = document.createElement("p");
  typeDivTwo.classList = "type";
  if (typeTwo) {
    typeDivTwo.innerHTML = typeTwo;
  } else {
    typeDivTwo.innerHTML = "";
  }
  if (typeTwo) {
    typeDivTwo.style = `background-color: ${typeColorTwo}`;
  } else {
    typeDivTwo.style = "";
  }

  contentCards.appendChild(card);
  card.appendChild(divContentLeft);
  contentIdCard.appendChild(idCard);
  divContentLeft.appendChild(contentIdCard);
  divContentLeft.appendChild(nameCard);
  contentImg.appendChild(imgCard);
  card.appendChild(contentImg);
  card.appendChild(pokeBall);
  divContentLeft.appendChild(contentType);
  contentType.appendChild(typeDivOne);
  contentType.appendChild(typeDivTwo);
};
