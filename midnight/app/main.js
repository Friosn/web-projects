import "./style.css";
import { Nav } from "./components/NavBar/nav";
import { footerComp } from "./components/Footer/footer";
import { landingPage } from "./pages/home/home";

landingPage();

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = footerComp();
