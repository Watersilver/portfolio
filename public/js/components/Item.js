import React from "react";

import {
  isDesktop,
  isMobile
} from "react-device-detect";

// Add tags
function Item(props) {
  return (
    <article className="item">
      <a className="snapshot" href={props.data.link} target="_blank" rel="noreferrer noopener">
        <img src={props.data.image} alt="snapshot of project"></img>
        <ul className="tag-list">
          {props.data.myTags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </a>
      <h3 className="title">{props.data.title}</h3>
      <p className="description">{props.data.description}</p>
      {isDesktop ? null : <p className="tags"><em>tags: {props.data.myTags.join(", ")}</em></p>}
    </article>
  );
}

export default Item;