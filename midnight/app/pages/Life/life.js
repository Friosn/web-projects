import "./life.css";

export const lifeBig = () => {
  const mainLife = document.querySelector("#app");
  mainLife.innerHTML = ``;
  mainLife.innerHTML += `
        <div id="life">
      
          <h2>LIFE IS TOO SHORT NOT TO <b>DANCE AND SMILE</b> A LITTLE</h2>
          <h2>Except if you are learning how to code, in that case you can just smile while you are not having any bugs 😊    -Happy Colonialisssssssssm!</h2>
          <span><i><h2>     - A wise bearded man</h2></i></span>
          
          
        </div>
            `;
  return mainLife;
};
