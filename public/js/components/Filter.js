import React from "react";

import FilterButton from "./FilterButton.js";

import tags from "../tags.js";

function Filter(props) {
  return <div id="filter">
    {tags.getFilterTags().map(tag => <FilterButton key={tag} tag={tag}/>)}
  </div>
}

export default Filter;