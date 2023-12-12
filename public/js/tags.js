const tags = {
  python: "Python",
  cpp: "C++",
  c: "C",
  lua: "Lua",
  // csharp: "C#",
  frontend: "Front End",
  html: "Html",
  css: "Css",
  javascript: "Javascript",
  react: "React",
  nextjs: "Next.js",
  svelte: "Svelte",
  redux: "Redux",
  d3: "D3.js",
  backend: "Back End",
  node: "Node.js",
  mongodb: "MongoDB",
  gamedev: "Gamedev",
  webassembly: "WebAssembly",
  typescript: "Typescript",
  pixijs: "Pixi.js",
  webpack: "Webpack",
  vite: "Vite"
};

const getImpliedTags = (explicitTag) => {
  const impliedTags = new Set([explicitTag]);
  for (let tag of impliedTags) {
    switch (tag) {
      case (tags.redux):
      case (tags.typescript):
        impliedTags.add(tags.javascript);
        break;
      case (tags.nextjs):
        impliedTags.add(tags.react);
        break;
      case (tags.react):
      case (tags.svelte):
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
      case tags.nextjs:
      case tags.react:
      case tags.svelte:
      case tags.frontend:
      case tags.webpack:
      case tags.vite:
      case tags.html:
      case tags.css:
      case tags.backend:
      // case tags.gamedev:
        return false;
      default:
        return true;
    }
  })
});

export default tags;