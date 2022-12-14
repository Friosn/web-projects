import "./homeStyle.css";
import { initDataCharacter } from "../CharacterPage/characterPage";
import { initPlanet } from "../PlanetPage/planetPage";
import { navBar } from "./components/NavBar/nav";
import { footer } from "./components/Footer/footer";

const header = document.querySelector("header");
header.innerHTML = navBar();

const footer = document.querySelector("footer");
footer.innerHTML = footer();

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
