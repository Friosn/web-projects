import { getData } from "../../services/service";

export const initDataCharacter = () => {
  getCharacter();
};

const getCharacter = async () => {
  const characters = await getData("characters");
  console.log(characters);
  mapInfoCharacters(characters);
};

const mapInfoCharacters = (listCharacters) => {
  const arrCharacters = listCharacters.map((character) => {
    return {
      image: character.image,
      name: character.characterName,
      species: character.species,
      planet: character.planet,
      death: character.wayToDie,
      famousQuote: character.famousQuote,
      chapter: character.chapter,
      voice: character.voice,
    };
    templateCharacter(arrCharacters);
  });
};

const templateCharacter = (arrCharacters) => {
  let mainApp = document.querySelector("#app");
  mainApp.innerHTML = ``;
  for (const character of arrCharacters) {
    mainApp.innerHTML += `
  <div class="character" style= "background-image: url(${character.image})">
      <h3>This is ${character.charactertName}</h3>
      <h3>This character appears in the chapter ${character.chapter}, belongs to the planet ${character.planet} and it is a ${character.species}</h3>
      <h3>One trascendental quote of this character is: <i>"${character.famousQuote}"</i></h3>
      <h3>The unavoidable death of this lovely character : ${planet.apocalypse}</h3>
      <h3>Voice by <b>${character.voice}</b></h3>
  </div>
      `;
  }
};
