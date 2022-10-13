import "./style.css";
import { Nav } from "./components/NavBar/nav";
import { footerComp } from "./components/Footer/footer";
import { landingPage } from "./pages/home/home";
import { linkPage } from "./utils/linkPage";
import { finalStop } from "./pages/Final Stop/finalStop";
import { lifeBig } from "./pages/Life/life";
import { support } from "./pages/Support/support";
/* import { activateMusic } from "./components/NavBar/nav";
import { musicList } from "../Music/music"; */

landingPage();

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = footerComp();

linkPage("#homeLink", landingPage);
linkPage("#deathLink", finalStop);
linkPage("#lifeLink", lifeBig);
linkPage("#supportLink", support);

/* activateMusic(); */
