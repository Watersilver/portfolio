import React, {Component} from "react";
import Context from '../Context.js';

import {
  isDesktop,
  isMobile
} from "react-device-detect";

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

// 331 x 207
import jsmoimg from "url:../../images/jsmodule.png";
import clinimg from "url:../../images/cli.png";

import twopimg from "url:../../images/2powN.png";
import goflimg from "url:../../images/gameoflife.png";
import barcimg from "url:../../images/barchart.png";
import smbrimg from "url:../../images/smbrowserbanner.png";
import contimg from "url:../../images/contacts.png";
import chorimg from "url:../../images/choropleth.png";
import drumimg from "url:../../images/drum.png";
import heatimg from "url:../../images/heat.png";
import chesimg from "url:../../images/chess.png";
import pomoimg from "url:../../images/pomodo.png";
import bannimg from "url:../../images/banners.png";
import scatimg from "url:../../images/scatterplot.png";
import treeimg from "url:../../images/treemap.png";
import parsimg from "url:../../images/parser.png";
import tictimg from "url:../../images/tictactoe.png";
import cub1img from "url:../../images/rotcube1.png";
import cub2img from "url:../../images/rotcube2.png";
import charimg from "url:../../images/charsheet.png";
import meriimg from "url:../../images/meritocracy.png";
import css3img from "url:../../images/css3dworld.png";
import chatimg from "url:../../images/chat.png";
// import stocimg from "url:../../images/stockchecker.png";
import cppgimg from "url:../../images/cppgame.png";
import loveimg from "url:../../images/lovegame.png";
import sim1img from "url:../../images/similar1.png";
import sim2img from "url:../../images/similar2.png";
import finaimg from "url:../../images/finance.png";
import sievimg from "url:../../images/sieve.png";
import pagoimg from "url:../../images/pagonis.png";
import prinimg from "url:../../images/princess.png";
import kinpimg from "url:../../images/keyboardinput.png";
import maidimg from "url:../../images/maiday.png";

const itemsData = [
  new ItemData("Conway's Game of Life", "Implementation of Conway's Game of Life, the famous cellular automaton, written in C++ that compiles as both a native and web app.", goflimg, "https://watersilver.github.io/Game-of-Life/",
  tags.cpp, tags.webassembly),
  new ItemData("2 ^ n, n∈ℕ", "A variant of the 2048 game that allows you to choose grid size and winning power of two.", twopimg, "https://watersilver.github.io/2powN/",
  tags.javascript, tags.css, tags.html, tags.gamedev),
  new ItemData("Contacts", "A web app that stores contact information. Contacts can be inserted, edited and deleted. Contacts are required to have a name and a valid email. They can also have an address and multiple valid phone numbers. Validation happens both at the front and the back end.", contimg, "https://contgeks.glitch.me/",
  tags.node, tags.react, tags.css, tags.html, tags.mongodb),
  new ItemData("Project Euler", "Solutions to Project Euler problems.", clinimg, "https://github.com/Watersilver/ProjectEuler",
  tags.python),
  new ItemData("File Comparison", "Web app where you can upload two files to be compared using a simple algorithm.", sim1img, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/less",
  tags.python, tags.backend),
  new ItemData("String Comparison", "Web app that measures edit distance between two strings, using dynamic programming.", sim2img, "https://github.com/Watersilver/cs50/tree/master/workspace/pset6/similarities/more",
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
  // new ItemData("Stock Checker", "Check stocks and compare times they've been liked.", stocimg, "https://fuschia-scarf.glitch.me/",
  // tags.javascript, tags.node, tags.mongodb),
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
  // new ItemData("Calculator", "A simple web calculator. Not the most accurate calculator...", calcimg, "https://codepen.io/watersilver/full/ROaWyP",
  // tags.react, tags.redux, tags.css, tags.html),
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
  // new ItemData("Psema", "Simple Entity-Component-System (id/state/logic) implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/Psema",
  // tags.javascript),
  new ItemData("TreeNode", "Tree data structure implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/TreeNode/blob/main/TreeNode.js",
  tags.javascript),
  new ItemData("Framework", "Simple entity-component (id/state & logic) implementation. Javascript module.", jsmoimg, "https://github.com/Watersilver/framework",
  tags.javascript),
  new ItemData("KeyboardInput", "Keyboard input storage. Javascript module.", kinpimg, "https://github.com/Watersilver/KeyboardInput",
  tags.javascript),
  new ItemData("Sieve of Eratosthenes", "Implementation of sieve of eratosthenes to compare speed of front end frameworks.", sievimg, "https://watersilver.github.io/eratosieve",
  tags.react, tags.svelte, tags.typescript, tags.vite),
  new ItemData("Personal Website", "Personal website for a cellist friend.", pagoimg, "https://apostolospagonis.github.io/cellist",
  tags.nextjs, tags.typescript),
  new ItemData("cppGame", "Small game made with C++. Works with a simple Entity-Component-System implementation. Also implements collision detection and resolution. To play in windows download and unpack Release.zip and run the .exe file.", cppgimg, "https://github.com/Watersilver/cppTestProject",
  tags.cpp, tags.gamedev),
  new ItemData("lovegame", "Massive unfinished project as of yet. Top down action rpg in the spirit of the zelda gameboy games. Uses placeholder resources for now.", loveimg, "https://drive.google.com/file/d/1f5dd3DlIjWycdfVOztlvTa5hgauW7n1_/view?usp=sharing",
  tags.lua, tags.gamedev),
  new ItemData("The Princess and the Plumber", "Pretty large very hard and unforgiving platformer.", prinimg, "https://watersilver.itch.io/the-princess-and-the-plumber",
  tags.gamedev),
  new ItemData("Super Mario Bro(w)s(er)", "Remake of smb1 without loading screens!", smbrimg, "https://watersilver.github.io/smbrowser/",
  tags.gamedev, tags.typescript, tags.webpack, tags.pixijs, tags.frontend),
  new ItemData("M.A.I.day", "Megaman x style run and gun with nes like graphics!", maidimg, "https://watersilver.itch.io/maiday/",
  tags.gamedev, tags.godot),
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
        },

        exclusiveSelectTag: tag => {
          this.setState({show: new Set([tag])})
        }
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {"0": "notouch"};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const navel = document.querySelector("#main-navigation>:last-child");

    if(window.scrollY > (window.innerHeight - navel.offsetTop - 1)){
      if (this.state[0] !== "touch") this.setState(["touch"]);
    } else {
      if (this.state[0] !== "notouch") this.setState(["notouch"]);
    }
  }

  componentDidMount() {
    if (isDesktop)
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (isDesktop)
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Provider>
        <Context.Consumer>
          {ctx => {
          const items = itemsData.filter(itemData => {
            for (let tag of tags.getAllTags(itemData.myTags)) {
              if (ctx.show.has(tag)) return true;
            }
          }).map(itemData => <Item key={itemData.title} data={itemData} />);


          return <section className={isMobile ? "mobile" : ""}>
            {isDesktop ? <nav id="main-navigation" className={this.state[0] === "touch" ? "attached" : ""}>
              <div><div></div></div>
              <div>
                <Navbutton link="#welcome" className="welcome">Welcome</Navbutton>
                <Navbutton link="#showcase" className="showcase">Projects</Navbutton>
                <Navbutton link="#goodbye" className="goodbye">Contact</Navbutton>
              </div>
            </nav> : null}
            <header id="welcome">
              {isDesktop ? <div id="background-details">
                <div className="det-white-ball1"></div>
                <div className="det-white-rect1"></div>
                <div className="det-white-rect2"></div>
                <div className="det-black-ball1"></div>
              </div> : null}
              <section id="few-words">
                <span className="sentence1">Hello,</span>
                <span className="sentence2">I am Ermis,</span>
                <span className="sentence3">A programmer with a diverse skillset.</span>
                {isDesktop ? <span className="sentence4">
                  <span>Scroll down to see a sample of my work</span>
                </span> : null}
              </section>
            </header>
            <main id="showcase">
              <Filter />
              <h2 className="filter-instruction">Use the filter to only include tags you are interested in</h2>
              {isDesktop ? <p className="filter-instruction">Shift+click to select multiple tags</p> : null}

              <section className="items">{items}</section>
            </main>
            <footer id="goodbye">
              <section className="more">
                <figure>
                  <figcaption>Find more of my work here</figcaption>
                  <ul>
                    <li><a href="https://github.com/Watersilver">github</a></li>
                    <li><a href="https://codepen.io/watersilver">codepen</a></li>
                    <li><a href="https://watersilver.itch.io/">itch.io</a></li>
                  </ul>
                </figure>
              </section>
              <section className="contact">
                <section>
                  <span>Contact me at </span>
                  <a href="mailto:ermiszervos@gmail.com">ermiszervos@gmail.com</a>
                </section>
              </section>
            </footer>
          </section>
          }}
        </Context.Consumer>
      </Provider>
    );
  }
};

export default App;