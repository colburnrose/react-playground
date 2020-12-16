import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world",
    };
  }

  handleWorldState = () => {
    this.setState({
      who: "world",
    });
  };

  handleReactState = () => {
    this.setState({
      who: "React!",
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleWorldState}>World</button>
        <button onClick={() => this.setState({ who: "friend!" })}>
          Friend
        </button>
        <button onClick={this.handleReactState}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
