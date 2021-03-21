import React, { Component } from "react";

class EducationalExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      titleStudy: "",
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
            <legend>Educational experience section</legend>
            <input
              type="text"
              name="schoolName"
              placeholder="school name"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="titleStudy"
              placeholder="title of study"
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

export default EducationalExperienceSection;
