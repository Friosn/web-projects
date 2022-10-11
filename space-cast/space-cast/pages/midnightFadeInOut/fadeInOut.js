import { getData } from "../../services/service";

const fadeInOut = async () => {
  const opening = await getData("opening");
};

const templateOpening = (opening) => {
  let mainApp = document.querySelector("#app");
  mainApp.innerHTML = ``;
};
