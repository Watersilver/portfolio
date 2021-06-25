const tags = {
  python: "Python",
  cpp: "C++",
  c: "C",
  // csharp: "C#",
  html: "Html",
  css: "Css",
  javascript: "Javascript",
  node: "Node.js",
  lua: "Lua",
  react: "React",
  redux: "Redux",
  frontend: "Front End",
  backend: "Back End",
  mongodb: "MongoDB",
  d3: "D3.js",
  gamedev: "Gamedev"
};

const getImpliedTags = (explicitTag) => {
  const impliedTags = new Set([explicitTag]);
  for (let tag of impliedTags) {
    switch (tag) {
      case (tags.redux):
        impliedTags.add(tags.javascript);
        break;
      case (tags.react):
      case (tags.d3):
        impliedTags.add(tags.javascript);
      case (tags.html):
      case (tags.css):
        impliedTags.add(tags.frontend);
        break;
      case (tags.node):
        impliedTags.add(tags.javascript);
      case (tags.mongodb):
        impliedTags.add(tags.backend);
      break;
    }
  }
  return impliedTags;
}

// Gets implicit as well as explicit tags. E.g node.js implies javascript
const getAllTags = tagsArray => {
  let tagsSet = new Set(tagsArray);
  const initSet = new Set(tagsSet);

  for (let tag of initSet) {
    const impliedTags = getImpliedTags(tag);
    if (impliedTags.size > 1) {
      tagsSet = new Set([...tagsSet, ...impliedTags]);
    }
  }

  return [...tagsSet];
}

Object.defineProperty(tags, "getAllTags", {
  value: getAllTags
});

Object.defineProperty(tags, "getFilterTags", {
  value: () => Object.values(tags).filter(tag => {
    switch (tag) {
      case tags.d3:
      case tags.redux:
      case tags.react:
      case tags.frontend:
      case tags.backend:
      // case tags.gamedev:
        return false;
      default:
        return true;
    }
  })
});

export default tags;