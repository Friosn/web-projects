export const reloadBtn = () => {
  const btn = document.createElement("button");
  btn.style.width = "100px";
  btn.style.height = "50px";
  btn.innerText = "Volver";
  //const app = document.querySelector('#app');
  listCharacter.insertAdjacentElement("afterend", btn);
  btn.addEventListener("click", () => window.location.reload());
};
reload();
