import "./style.css";

import { landingPage } from "./pages/HomePage/homePage";
import { navBar } from "./components/NavBar/nav";
import { footer } from "./components/Footer/footer";

const header = document.querySelector("header");
header.innerHTML = navBar();

const footer = document.querySelector("footer");
footer.innerHTML = footer();
