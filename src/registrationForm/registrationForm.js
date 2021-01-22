import React, { Component } from "react";
import ValidationError from "../validation-error/ValidationError";
import "./registrationForm.css";

class RegistrationForm extends Component {
  // set up state to store form values
  state = {
    name: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
    repeatPassword: {
      value: "",
      touched: false,
    },
  };

  // create handlers to update the values
  updateName(name) {
    this.setState({
      name: { value: name, touched: true },
    });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true },
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: { value: repeatPassword, touched: true },
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

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 15) {
      return "Password must be between 6 and 15 characters long";
    } else if (password.match(/[0-9]/)) {
      return "Password must contain at least one number.";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();
    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  render() {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

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
          {this.state.name.touched && <ValidationError message={nameError} />}
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
          {this.state.password.touched && (
            <ValidationError message={passwordError} />
          )}
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
          {this.state.repeatPassword.touched && (
            <ValidationError message={repeatPasswordError} />
          )}
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
