import React, { Component } from "react";
import "./registrationForm.css";

class RegistrationForm extends Component {
  // set up state to store form values
  state = {
    name: {
      value: "",
    },
    password: {
      value: "",
    },
    repeatPassword: {
      value: "",
    },
  };

  // create handlers to update the values
  updateName(name) {
    this.setState({
      name: { value: name },
    });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password },
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: { value: repeatPassword },
    });
  }

  // add method to process form values
  handleSubmit(event) {
    event.preventDefault();
    const { name, password, repeatPassword } = this.state;
    console.log("Name: ", name);
    console.log("Password: ", password);
    console.log("Repeat Password: ", repeatPassword);
  }

  render() {
    return (
      <form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            defaultValue="Name"
            onChange={(e) => this.updateName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            defaultValue="Password"
            onChange={(e) => this.updatePassword(e.target.value)}
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
            onChange={(e) => this.updateRepeatPassword(e.target.value)}
          />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
