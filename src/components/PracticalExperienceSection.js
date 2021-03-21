import React, { Component } from "react";

class PracticalExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      beginDate: "",
      endDate: "",
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
            <legend>Practical experience section</legend>
            <input
              type="text"
              name="companyName"
              placeholder="company name"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="positionTitle"
              placeholder="position title"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="mainTasks"
              placeholder="main tasks"
              onChange={this.changeHandler}
            />
            <input
              type="date"
              name="beginDate"
              placeholder="beginning date"
              onChange={this.changeHandler}
            />
            <input
              type="date"
              name="endDate"
              placeholder="last date"
              onChange={this.changeHandler}
            />
          </fieldset>
          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default PracticalExperienceSection;
