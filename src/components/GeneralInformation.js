import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
      isComplete:false
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      isComplete: true,
    });
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
              disabled={ this.state.isComplete }
            />
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              onChange={this.changeHandler}
              disabled={ this.state.isComplete }
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.changeHandler}
              disabled={ this.state.isComplete }
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="phone number"
              onChange={this.changeHandler}
              disabled={ this.state.isComplete }
            />
          </fieldset>
          <button type="submit">{this.state.isComplete?"Update":"Add"}</button>
        </form>
      </React.Fragment>
    );
  }
}

export default GeneralInformation;
