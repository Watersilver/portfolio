import React from "react";
import {createRoot} from "react-dom/client";

import App from "./public/js/components/App.js";

const root = createRoot(document.getElementById("root"))
root.render(<App />)

function detectScrollbar() {
  document.getElementsByTagName("body")[0].style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
}

detectScrollbar();

document.addEventListener("resize", detectScrollbar());