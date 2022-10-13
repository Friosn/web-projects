import "./navStyle.css";
import { landingPage } from "../../pages/home/home";
/* import { musicList } from "../Music/music";
import { leoPower } from "../Music/music"; */

/* export const activateMusic = () => {
  const musicBtn = document.querySelector("#musicBtn");

  musicBtn.addEventListener("click", (event) => {
    document.body.classList.toggle("On") & turnOn();
  });
};

const turnOn = () => {
  const musicBtn = document.querySelector("#musicBtn");
  if (musicBtn.innerText === "Music On") {
    play(leoPower);
  } else {
    musicBtn.innerText = "Music Off";
  }
}; */

export const Nav = () => {
  return `
    <nav >
        <ul>
          <li>
            <a href="#" id="homeLink">Home</a>
          </li>
          
          <li>
            <a href="#" id="lifeLink">Life</a>
          </li>
          <li>
            <a href="#" id="deathLink">Final.Stop</a>
          </li>
        </ul>

        
    </nav>
`;
};
/* <button id="musicBtn">Music On</button> */

/* <li>
            <a href="#" id="supportLink">Support</a>
          </li> */
