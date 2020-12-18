import React from "react";

class Accordian extends React.Component {
  static defaultProps = {
    sections: [],
  };

  state = {
    currentIndex: 0,
  };

  handleButtonClick = (index) => {
    this.setState({ currentIndex: index });
  };

  renderSectionItems(currentIndex) {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button type="button" onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {currentIndex === index && <p>{section.content}</p>}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul>{this.renderSectionItems(this.state.currentIndex)}</ul>
      </div>
    );
  }
}

export default Accordian;
