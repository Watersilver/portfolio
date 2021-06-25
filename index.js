import React from "react";
import {render} from "react-dom";

import App from "./public/js/components/App.js";

render(<App />, document.getElementById("root"));

function detectScrollbar() {
  document.getElementsByTagName("body")[0].style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
}

detectScrollbar();

document.addEventListener("resize", detectScrollbar());