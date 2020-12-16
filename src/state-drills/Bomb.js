import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0,
    sound: "tick",
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      let counter = this.state.count + 1;
      this.setState({ count: counter });
      if (counter >= 8) {
        this.setState({ display: "BOOM!" });
        this.componentWillUnmount(); // clear the interval
      } else if (counter % 2 === 0) {
        this.setState({ display: "Tick" });
      } else {
        this.setState({ display: "Tock" });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Wait for the Bomb to go Booom!</h1>
        <p>{this.state.display}</p>
      </div>
    );
  }
}

export default Bomb;
