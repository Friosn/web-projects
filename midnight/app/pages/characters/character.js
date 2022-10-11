import { getData } from "../../services/service";
import "./characterStyle.css";

export const initDataCharacter = () => {
  getCharacter();
};

const getCharacter = async () => {
  const characters = await getData("characters");

  mapInfoCharacters(characters);
};

const mapInfoCharacters = (listCharacters) => {
  const arrCharacters = listCharacters.map((character) => {
    return {
      image: character.image,
      name: character.characterName,
      species: character.species,
      planet: character.planet,
      wayToDie: character.wayToDie,
      famousQuote: character.famousQuote,
      chapter: character.chapter,
      voice: character.voice,
    };
  });
  templateCharacter(arrCharacters);
};

const templateCharacter = (arrCharacters) => {
  let mainApp = document.querySelector("#app");
  mainApp.innerHTML = ``;
  for (const character of arrCharacters) {
    mainApp.innerHTML += `
    <div class="character">
  
        <img src="${character.image} width="130px" height="130px">
  
        <div class="boxy">
  
           <h3>This is ${character.name}</h3>
           <p>This character appears in the chapter ${character.chapter}, belongs to the planet ${character.planet} and it is a ${character.species}</p>
           <p>One trascendental quote of this character is: <i>"${character.famousQuote}"</i></p>
           <p>The unavoidable death of this lovely character : ${character.wayToDie}</p>
           <h4 display: "center">Voice by <i>${character.voice}</i></h4>
  
        </div>
    </div>
        `;
  }
};
