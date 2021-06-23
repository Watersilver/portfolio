import React, {Component} from "react";
import Context from '../Context.js';

import tags from "../tags.js";

import Item from "./Item.js";
import Filter from "./Filter";
import Navbutton from "./Navbutton";

class ItemData {
  constructor(title, description, image, link, ...myTags) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    // this.myTags = myTags || [];
    this.myTags = myTags;
  }
};

const itemsData = [
  new ItemData("Project Euler", "Solutions to Project Euler problems", null, "https://github.com/Watersilver/ProjectEuler",
  tags.python),
  new ItemData("File Comparison (Simple Version)", "Web app where you can upload two files to be compared using a simple algorithm. Python backend.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/less",
  tags.python, tags.backend),
  new ItemData("File Comparison", "Web app that measures edit distance between two strings, using dynamic programming. Python backend.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/more",
  tags.python, tags.backend),
  new ItemData("Stock Trading Simulator", "Web app. Queries Yahoo or Alpha Vantage for quotes.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset7/finance",
  tags.python, tags.backend),
  new ItemData("Spell Checker", "Cli that utilises a trie data structure and a dictionary (lexicographically sorted from top to bottom with one word per line, each of which ends with \n) to implement a spell checker.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset5/speller",
  tags.c),
  new ItemData("Resize Bitmap", "Cli that resizes 24-bit uncompressed bitmap images.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset4/resize/more",
  tags.c),
  new ItemData("Recover JPEGs", "Cli that recovers deleted JPEGs from memory.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset4/recover",
  tags.c),
  new ItemData("Music", "Cli that takes musical notation as input and outputs simple wav file.", null, "https://github.com/Watersilver/cs50/tree/master/workspace/pset3/music",
  tags.c),
  new ItemData("Spinning Cube", "Spin the cube by clicking and dragging! 3d effects using pure css, and Quaternion.js to calculate rotations.", null, "https://panoscubev1.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Css 3d World", "Use w, a, s, d to strafe and arrow keys and q, e to turn to navigate the 3d world made with pure html, css and js. (Works best in Chrome)", null, "https://css3dworldtest.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Meritocracy", `A very simple "Experiment" that compares skill with luck.`, null, "https://meritocracyv0.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Simple Chatroom", "Web app that uses Socket.io and github authentication to implement a simple chatroom.", null, "https://fine-calculator.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Stock Checker", "Check stocks and compare times they've been liked.", null, "https://fuschia-scarf.glitch.me/",
  tags.javascript, tags.node, tags.mongodb),
  new ItemData("Spinning Cube (Simple)", "Spin the cube by inputing three angles or pressing 'Random'.", null, "https://codepen.io/watersilver/full/MxOmrP",
  tags.javascript, tags.css, tags.html),
  new ItemData("Tic Tac Toe Card", "Play tic tac toe on a card against a human, a bad AI, a mediocre AI or a perfect AI. Works best on Chrome.", null, "https://codepen.io/watersilver/full/qvMYag",
  tags.react, tags.css, tags.html),
  new ItemData("Interactive Chessboard", "It stores its state and can be navigated with the arrow buttons to the side (Undo also works with ctrl + z).", null, "https://codepen.io/watersilver/full/WmVXBx",
  tags.react, tags.redux, tags.css, tags.html),
  new ItemData("Character Sheet", "D&D 3.5 Interactive character sheet. Url path is character ID.", null, "https://charsheet.glitch.me",
  tags.react, tags.css, tags.html, tags.mongodb),
  new ItemData("Markdown Previewer", "Web app that parses and previews inputed markdown.", null, "https://codepen.io/watersilver/full/rbOEaK",
  tags.react, tags.css, tags.html),
  new ItemData("Drum Machine", "Click the buttons or press the corresponding keys to play sounds!", null, "https://codepen.io/watersilver/full/ROramX",
  tags.react, tags.css, tags.html),
  new ItemData("Calculator", "A simple web calculator. Not the most accurate calculator...", null, "https://codepen.io/watersilver/full/ROaWyP",
  tags.react, tags.redux, tags.css, tags.html),
  new ItemData("Pomodoro Timer", "Cycle between work time and breaks with the help of this.", null, "https://codepen.io/watersilver/full/axmLxp",
  tags.javascript, tags.css, tags.html),
  new ItemData("Bar Chart", "A bar chart of the United States GDP.", null, "https://codepen.io/watersilver/full/oOBGmL",
  tags.d3, tags.css, tags.html),
  new ItemData("Scatter Plot", "A scatter plot of doping in professional bicycle racing.", null, "https://codepen.io/watersilver/full/axEYKq",
  tags.d3, tags.css, tags.html),
  new ItemData("Random Banners", "Banners that can help randomize behaviour depending on inputed percentage. Needs better random function.", null, "https://codepen.io/watersilver/full/MRXKBb",
  tags.javascript, tags.css, tags.html),
  new ItemData("Heat Map", "A heat map of monthly global land-surface temperature.", null, "https://codepen.io/watersilver/full/NmOJLp",
  tags.d3, tags.css, tags.html),
  new ItemData("Choropleth Map", "A choropleth map of educational attainment by state in the United States. Uses topojson.", null, "https://codepen.io/watersilver/full/NmewXq",
  tags.d3, tags.css, tags.html),
  new ItemData("Treemap Diagram", "A treemap diagram of the top 100 most pledged kickstarter campaigns grouped by category.", null, "https://codepen.io/watersilver/full/NmewXq",
  tags.d3, tags.css, tags.html),
  new ItemData("JsonState", "Json that runs callbacks when it mutates. Javascript module.", null, "https://github.com/Watersilver/JsonState",
  tags.javascript),
  new ItemData("Psema", "Simple Entity-Component-System (id/state/logic) implementation. Javascript module.", null, "https://github.com/Watersilver/Psema",
  tags.javascript),
  new ItemData("TreeNode", "Tree data structure implementation. Javascript module.", null, "https://github.com/Watersilver/TreeNode/blob/main/TreeNode.js",
  tags.javascript),
  new ItemData("Framework", "Simple entity-component (id/state & logic) implementation. Javascript module.", null, "https://github.com/Watersilver/framework",
  tags.javascript),
  new ItemData("KeyboardInput", "Keyboard input storage. Javascript module.", null, "https://github.com/Watersilver/KeyboardInput",
  tags.javascript),
  new ItemData("cppGame", "Small game made with C++. Works with a simple Entity-Component-System implementation. Also implements collision detection and resolution. To run clone/download repo, navigate to cppTestProject/Release and double click the .exe file.", null, "https://github.com/Watersilver/cppTestProject",
  tags.cpp, tags.gamedev),
  new ItemData("lovegame", "Massive unfinished project as of yet. Top down action rpg in the spirit of the zelda gameboy games. Uses placeholder resources for now.", null, "https://github.com/Watersilver/lovegame",
  tags.lua, tags.gamedev),
  // new ItemData("Gamemaker game", "Pretty large very hard and unforgiving platformer.", null, "https://watersilver.itch.io/the-princess-and-the-plumber",
  // tags.gamedev),
];

itemsData.sort((a, b) => a.title.localeCompare(b.title));

// make sure there are no dupe titles
const titles = itemsData.map(itemData => itemData.title);
for (let i = 0; i < titles.length; i++)
  for (let j = i+1; j < titles.length; j++)
    if (titles[i] === titles[j]) throw Error(titles[i] + " appears at least twice.");

// Context is overkill for this, but it's good practice
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: new Set(tags.getFilterTags())
    };
  }

  render() {
    return (
      <Context.Provider value={{
        show: this.state.show,

        toggleTag: tag => {
          this.setState(prevState => {
            const newShow = new Set(prevState.show);
            if (prevState.show.has(tag))
              newShow.delete(tag)
            else
              newShow.add(tag)

            return {show: newShow};
          })
        }
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


function App(props) {
  return (
    <Provider>
      <Context.Consumer>
        {ctx => {
        const items = itemsData.filter(itemData => {
          for (let tag of tags.getAllTags(itemData.myTags)) {
            if (ctx.show.has(tag)) return true;
          }
        }).map(itemData => <Item key={itemData.title} data={itemData} />);


        return <section>
          <nav id="main-navigation">
            <div><div></div></div>
            <div>
              <Navbutton link="#welcome" className="welcome">Welcome</Navbutton>
              <Navbutton link="#showcase" className="showcase">Projects</Navbutton>
              <Navbutton link="#goodbye" className="goodbye">Contact</Navbutton>
            </div>
          </nav>
          <header id="welcome"></header>
          <main id="showcase">
            <Filter />
            <h2>Here is a sample of my work</h2>

            {items}
          </main>
          <footer id="goodbye"></footer>
        </section>
        }}
      </Context.Consumer>
    </Provider>
  );
};

export default App;