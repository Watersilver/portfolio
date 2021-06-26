import React from "react";
import Context from "../Context.js";

function FilterButton(props) {
  return (
    <Context.Consumer>
      {ctx => {
        return <div className={"filter-button " + (ctx.show.has(props.tag) ? "pressed" : "")}
        onClick={e => {
          if (e.shiftKey)
            ctx.toggleTag(props.tag)
          else
            ctx.exclusiveSelectTag(props.tag)
          }}>
          <span>{props.tag}</span>
        </div>;
      }}
    </Context.Consumer>
  );
}

export default FilterButton;