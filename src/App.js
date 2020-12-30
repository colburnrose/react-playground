import "./App.css";

import React, { Component } from "react";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";
import Messages from "./Messages.js";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";
import Tabs from "./state/Tabs";
import Accordian from "./state-drills/Accordian";
import DemonymApp from "./demonymapp/demonymApp";

const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
);
// function App() {
//   return (
//     <main className="App">
//       <Split className="left" flexBasis={3}>
//         This is the content for the left `Split`. Lorem {firstTooltip} dolor sit
//         amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere
//         officia?
//         <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
//       </Split>
//       <Split className="right">
//         This is the content for the right `Split`. Inventore aliquid cupiditate
//         suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo
//         possimus id soluta aspernatur.
//       </Split>
//     </main>
//   );
// }

// array of objs each with a name and content
const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
  },
];

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <HelloWorld />
      //   <h1>APPLICATION NAME</h1>
      //   <TheDate />
      //   <Messages name="Messages" unread={0} />
      //   <Messages name="Notifications" unread={10} />
      //   <Counter count={123} />
      //   <Bomb />
      //   <RouletteGun />
      // </div>
      <div>
        {/* <Bomb />
        <Tabs tabs={tabsProp} />
        <Accordian sections={sections} /> */}
        <DemonymApp />
      </div>
    );
  }
}

export default App;
