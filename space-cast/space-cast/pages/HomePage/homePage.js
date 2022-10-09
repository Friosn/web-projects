import "./homeStyle.css";
import { initDataCharacter } from "../CharacterPage/characterPage";
import { initPlanet } from "../PlanetPage/planetPage";

export const landingPage = () => {
  component();
};

const component = () => {
  document.querySelector("#app").innerHTML = `
    <div class = "container">
        <div class = "left">
            <h3> Characters</h3>
            <button class= "btn" id="characters">Characters</button>
        </div>
        
        <div class = "right">
            <h3> Planets</h3>
            <button class="btn" id="planets">Simulator Planets</button>
        </div>
    </div>    
    `;

  addEventListener();
};

const addEventListener = () => {
  const buttonPlanets = document.querySelector("#planets");
  const buttonCharacters = document.querySelector("#characters");

  buttonCharacters.addEventListener("click", () => initDataCharacter);
  buttonPlanets.addEventListener("click", () => initPlanet);
};
