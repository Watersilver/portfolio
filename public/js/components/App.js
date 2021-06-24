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

import jsmoimg from "../../images/jsmodule.png";
import clinimg from "../../images/cli.png";

import barcimg from "../../images/barchart.png";
import calcimg from "../../images/calculator.png";
import chorimg from "../../images/choropleth.png";
import drumimg from "../../images/drum.png";
import heatimg from "../../images/heat.png";
import chesimg from "../../images/chess.png";
import pomoimg from "../../images/pomodo.png";
import bannimg from "../../images/banners.png";
import scatimg from "../../images/scatterplot.png";
import treeimg from "../../images/treemap.png";
import parsimg from "../../images/parser.png";
import tictimg from "../../images/tictactoe.png";
import cub1img from "../../images/rotcube1.png";
import cub2img from "../../images/rotcube2.png";
import charimg from "../../images/charsheet.png";
import meriimg from "../../images/meritocracy.png";
import css3img from "../../images/css3dworld.png";
import chatimg from "../../images/chat.png";
import stocimg from "../../images/stockchecker.png";
import cppgimg from "../../images/cppgame.png";
import loveimg from "../../images/lovegame.png";
import sim1img from "../../images/similar1.png";
import sim2img from "../../images/similar2.png";
import finaimg from "../../images/finance.png";
import encoimg from "../../images/entcomp.png";
import kinpimg from "../../images/keyboardinput.png";

const itemsData = [
  new ItemData("Project Euler", "Solutions to Project Euler problems", clinimg, "https://github.com/Watersilver/ProjectEuler",
  tags.python),
  new ItemData("File Comparison", "Web app where you can upload two files to be compared using a simple algorithm. Python backend.", sim1img, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/less",
  tags.python, tags.backend),
  new ItemData("String Comparison", "Web app that measures edit distance between two strings, using dynamic programming. Python backend.", sim2img, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/more",
  tags.python, tags.backend),
  new ItemData("Stock Trading Simulator", "Web app. Queries Yahoo or Alpha Vantage for quotes.", finaimg, "https://github.com/Watersilver/cs50/tree/master/workspace/pset7/finance",
  tags.python, tags.backend),
  new ItemData("Spell Checker", "Cli that utilises a trie data structure and a dictionary (lexicographically sorted from top to bottom with one word per line, each of which ends with \n) to implement a spell checker.", clinimg, "https://github.com/Watersilver/cs50/tree/master/workspace/pset5/speller",
  tags.c),
  new ItemData("Resize Bitmap", "Cli that resizes 24-bit uncompressed bitmap images.", clinimg, "https://github.com/Watersilver/cs50/tree/master/workspace/pset4/resize/more",
  tags.c),
  new ItemData("Recover JPEGs", "Cli that recovers deleted JPEGs from memory.", clinimg, "https://github.com/Watersilver/cs50/tree/master/workspace/pset4/recover",
  tags.c),
  new ItemData("Music", "Cli that takes musical notation as input and outputs simple wav file.", clinimg, "https://github.com/Watersilver/cs50/tree/master/workspace/pset3/music",
  tags.c),
  new ItemData("Spinning Cube", "Spin the cube by clicking and dragging! 3d effects using pure css, and Quaternion.js to calculate rotations.", cub2img, "https://panoscubev1.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Css 3d World", "Use w, a, s, d to strafe and arrow keys and q, e to turn to navigate the 3d world made with pure html, css and js. (Works best in Chrome)", css3img, "https://css3dworldtest.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Meritocracy", `A very simple "Experiment" that compares skill with luck.`, meriimg, "https://meritocracyv0.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Simple Chatroom", "Web app that uses Socket.io and github authentication to implement a simple chatroom.", chatimg, "https://fine-calculator.glitch.me/",
  tags.node, tags.javascript, tags.css, tags.html),
  new ItemData("Stock Checker", "Check stocks and compare times they've been liked.", stocimg, "https://fuschia-scarf.glitch.me/",
  tags.javascript, tags.node, tags.mongodb),
  new ItemData("Spinning Cube (Simple)", "Spin the cube by inputing three angles or pressing 'Random'.", cub1img, "https://codepen.io/watersilver/full/MxOmrP",
  tags.javascript, tags.css, tags.html),
  new ItemData("Tic Tac Toe Card", "Play tic tac toe on a card against a human, a bad AI, a mediocre AI or a perfect AI. Works best on Chrome.", tictimg, "https://codepen.io/watersilver/full/qvMYag",
  tags.react, tags.css, tags.html),
  new ItemData("Interactive Chessboard", "It stores its state and can be navigated with the arrow buttons to the side (Undo also works with ctrl + z).", chesimg, "https://codepen.io/watersilver/full/WmVXBx",
  tags.react, tags.redux, tags.css, tags.html),
  new ItemData("Character Sheet", "D&D 3.5 Interactive character sheet. Url path is character ID.", charimg, "https://charsheet.glitch.me",
  tags.react, tags.css, tags.html, tags.mongodb),
  new ItemData("Markdown Previewer", "Web app that parses and previews inputed markdown.", parsimg, "https://codepen.io/watersilver/full/rbOEaK",
  tags.react, tags.css, tags.html),
  new ItemData("Drum Machine", "Click the buttons or press the corresponding keys to play sounds!", drumimg, "https://codepen.io/watersilver/full/ROramX",
  tags.react, tags.css, tags.html),
  new ItemData("Calculator", "A simple web calculator. Not the most accurate calculator...", calcimg, "https://codepen.io/watersilver/full/ROaWyP",
  tags.react, tags.redux, tags.css, tags.html),
  new ItemData("Pomodoro Timer", "Cycle between work time and breaks with the help of this.", pomoimg, "https://codepen.io/watersilver/full/axmLxp",
  tags.javascript, tags.css, tags.html),
  new ItemData("Bar Chart", "A bar chart of the United States GDP.", barcimg, "https://codepen.io/watersilver/full/oOBGmL",
  tags.d3, tags.css, tags.html),
  new ItemData("Scatter Plot", "A scatter plot of doping in professional bicycle racing.", scatimg, "https://codepen.io/watersilver/full/axEYKq",
  tags.d3, tags.css, tags.html),
  new ItemData("Random Banners", "Banners that can help randomize behaviour depending on inputed percentage.", bannimg, "https://codepen.io/watersilver/full/MRXKBb",
  tags.javascript, tags.css, tags.html),
  new ItemData("Heat Map", "A heat map of monthly global land-surface temperature.", heatimg, "https://codepen.io/watersilver/full/NmOJLp",
  tags.d3, tags.css, tags.html),
  new ItemData("Choropleth Map", "A choropleth map of educational attainment by state in the United States. Uses topojson.", chorimg, "https://codepen.io/watersilver/full/NmewXq",
  tags.d3, tags.css, tags.html),
  new ItemData("Treemap Diagram", "A treemap diagram of the top 100 most pledged kickstarter campaigns grouped by category.", treeimg, "https://codepen.io/watersilver/full/vMPRyW",
  tags.d3, tags.css, tags.html),
  new ItemData("JsonState", "Json that runs callbacks when it mutates. Javascript module.", jsmoimg, "https://github.com/Watersilver/JsonState",
  tags.javascript),
  new ItemData("Psema", "Simple Entity-Component-System (id/state/logic) implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/Psema",
  tags.javascript),
  new ItemData("TreeNode", "Tree data structure implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/TreeNode/blob/main/TreeNode.js",
  tags.javascript),
  new ItemData("Framework", "Simple entity-component (id/state & logic) implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/framework",
  tags.javascript),
  new ItemData("KeyboardInput", "Keyboard input storage. Javascript module.", kinpimg, "https://github.com/Watersilver/KeyboardInput",
  tags.javascript),
  new ItemData("cppGame", "Small game made with C++. Works with a simple Entity-Component-System implementation. Also implements collision detection and resolution. To run clone/download repo, navigate to cppTestProject/Release and double click the .exe file.", cppgimg, "https://github.com/Watersilver/cppTestProject",
  tags.cpp, tags.gamedev),
  new ItemData("lovegame", "Massive unfinished project as of yet. Top down action rpg in the spirit of the zelda gameboy games. Uses placeholder resources for now.", loveimg, "https://github.com/Watersilver/lovegame",
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

            <section className="items">{items}</section>
          </main>
          <footer id="goodbye"></footer>
        </section>
        }}
      </Context.Consumer>
    </Provider>
  );
};

export default App;