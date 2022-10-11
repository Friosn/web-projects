import { getData } from "../../services/service";
import "./planetStyle.css";

export const initPlanet = () => {
  getPlanet();
};
const getPlanet = async () => {
  const planets = await getData("planets");
  mapInfoPlanet(planets);
};

const mapInfoPlanet = (listPlanets) => {
  const mapedPlanets = listPlanets.map((planet) => {
    return {
      image: planet.image,
      name: planet.planetName,
      theme: planet.theme,
      problematic: planet.problematic,
      apocalypse: planet.apocalypse,
      moral: planet.moral,
      chapter: planet.chapter,
    };
  });
  templatePlanet(mapedPlanets);
};

const templatePlanet = (planets) => {
  let mainApp = document.querySelector("#app");
  mainApp.innerHTML = ``;
  for (const planet of planets) {
    mainApp.innerHTML += `
        <div class="planet">
            <img src="${planet.image}">
            <h3>This is ${planet.name}</h3>
            <p>This is the chapter ${planet.chapter} of the TV show, and it builds up about the theme of: ${planet.theme}</p>
            <p>The moral of this chapter is: ${planet.moral}</p>
            <p>Apocalyptic scene and final of the world: ${planet.apocalypse}</p>
            
        </div>
        `;
  }
};
