import React, { Component } from "react";
import "./demonymApp.css";

import Demonym from "./demonym";
import CountrySelector from "./countrySelector";

class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null,
    };
  }

  setSelected(selected) {
    this.setState({
      selected,
    });
  }

  componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then((response) => {
        // check if response is ok
        console.log("About to check for errors");
        if (!response.ok) {
          console.log("An error did occur, let's thrown an error");
          throw new Error("Something went wrong!");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        // iterate over object for each of the properties extract
        // the country obj and drop the rest
        const countries = Object.keys(data).map((key) => data[key].item[0]);
        // put object with the propertiese we want into the state
        this.setState({
          countries,
          error: null,
        });
      })
      .catch((err) => {
        // this catch handles the error condition
        console.log("Handling the error", err);
        this.setState({
          error: err.message,
        });
      });
  }
  render() {
    const demon = this.state.selected ? (
      <Demonym
        name={this.state.selected["citizen-names"]}
        country={this.state.selected.name}
      />
    ) : (
      <div className="demonym_app__placeholder">Select a country above</div>
    );

    const error = this.state.error ? (
      <div className="demonym_app__error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <div className="demonym_app">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={(selected) => this.setSelected(selected)}
        />
        {demon}
      </div>
    );
  }
}

export default DemonymApp;
