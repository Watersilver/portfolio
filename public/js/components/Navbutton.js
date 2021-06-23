import React from "react";

function Navbutton(props) {
  return (
    <a href={props.link} className={`navbutton ${props.className}`}>
      {props.children}
    </a>
  );
}

export default Navbutton;