import React from "react";

// Add tags
function Item(props) {
  return (
    <article className="item">
      <a className="snapshot" href={props.data.link} target="_blank" rel="noreferrer noopener"><img src={props.data.image} alt="snapshot of project"></img></a>
      <h3 className="title">{props.data.title}</h3>
      <p className="description">{props.data.description}</p>
      <p className="tags"><em>tags: {props.data.myTags.join(", ")}</em></p>
    </article>
  );
}

export default Item;