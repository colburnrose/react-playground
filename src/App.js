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

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <h1>APPLICATION NAME</h1>
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <Counter count={123} />
        <Bomb />
        <RouletteGun />
      </div>
    );
  }
}

export default App;
