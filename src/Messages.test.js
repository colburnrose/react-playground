import React from "react";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";

describe("Messages component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // render the component and create a human-readable JSON file
  // compare the rendered component to a saved version.
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected with no reads", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
