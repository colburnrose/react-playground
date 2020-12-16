import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + this.state.step,
    });
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
