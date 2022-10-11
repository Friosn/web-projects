import { getData } from "../../services/service";
import { initDataCharacter } from "../characters/character";
import { initPlanet } from "../planets/planet";
import "./homeStyle.css";

export const landingPage = () => {
  component();
};

const component = () => {
  document.querySelector("#app").innerHTML = `
      <div class = "container">
          <div class = "left">      
              <button class= "btn" id="characters">Characters</button>
          </div>
          
          <div class = "right">
          
              <button class="btn" id="planets">Simulator Planets</button>
          </div>
      </div>    
      `;

  shootingEvent();
};

const newAudio = new Audio("/public/audio/midnightGroarr.mp3");
const shootingEvent = () => {
  const anyButton = document.querySelectorAll("button");
  const buttonPlanets = document.querySelector("#planets");
  const buttonCharacters = document.querySelector("#characters");

  buttonCharacters.addEventListener("click", initDataCharacter);
  buttonPlanets.addEventListener("click", (event) => initPlanet());

  anyButton.forEach((btn) => {
    btn.addEventListener("click", (event) => newAudio.play());
  });
};
