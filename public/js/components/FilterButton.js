import React from "react";
import Context from "../Context.js";

function FilterButton(props) {
  return (
    <Context.Consumer>
      {ctx => {
        return <div className={"filter-button " + (ctx.show.has(props.tag) ? "pressed" : "")}
        onClick={() => ctx.toggleTag(props.tag)}>
          <span>{props.tag}</span>
        </div>;
      }}
    </Context.Consumer>
  );
}

export default FilterButton;