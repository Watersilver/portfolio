import React from "react";
import {createRoot} from "react-dom/client";

import App from "./public/js/components/App.js";

const root = createRoot(document.getElementById("root"))
root.render(<App />)


function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
    
}
const updateCssVarScrollbarWidth = () => {
  document.getElementsByTagName("body")[0].style.setProperty('--scrollbar-width', getScrollbarWidth() + "px");
}
window.addEventListener("resize", updateCssVarScrollbarWidth);
updateCssVarScrollbarWidth();