import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <legend>General information</legend>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              onChange={this.changeHandler}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.changeHandler}
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="phone number"
              onChange={this.changeHandler}
            />
          </fieldset>
          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default GeneralInformation;
