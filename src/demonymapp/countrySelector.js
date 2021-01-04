import React, { Component } from "react";

class CountrySelector extends React.Component {
  changeSelection(value) {
    if (value === "None") {
      this.props.changeHandler(null);
    } else {
      // find the country that is selected
      const c = this.props.countries.find((country) => country.name === value);
      this.props.changeHandler(c);
    }
  }

  render() {
    const options = this.props.countries.map((country, i) => (
      <option key={i} value={country.name}>
        {country.name}
      </option>
    ));

    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a country:</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.changeSelection(e.target.value)}
          >
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

export default CountrySelector;