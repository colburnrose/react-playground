import "./App.css";

import React, { Component } from "react";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";
import Messages from "./Messages.js";

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
        <h1>APPLICATION NAME</h1>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </div>
    );
  }
}

export default App;
