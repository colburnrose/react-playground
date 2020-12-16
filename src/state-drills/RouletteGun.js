import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      let randNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randNum,
        spinningTheChamber: false,
      });
    }, 2000);
  };

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  renderGunChamber() {
    if (this.state.spinningTheChamber) {
      return "spinning the chamber and pulling the trigger!";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!";
    } else {
      return "you're safe!";
    }
  }

  render() {
    return (
      <div>
        <h1>RouletteGun</h1>
        <p>{this.renderGunChamber()}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
