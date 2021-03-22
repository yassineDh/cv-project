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
      isComplete: false,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    
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
  updateHandler(e) {
    e.preventDefault();
    console.log("inside update");
    this.setState({
      isComplete: false,
    });
  }
  render() {
    let button = this.state.isComplete ? (
      <button type="button" onClick={this.updateHandler}>
        Update
      </button>
    ) : (
      <button type="submit">Add</button>
    );
    console.log(this.state);
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
              disabled={this.state.isComplete}
            />
            <input
              type="text"
              name="positionTitle"
              placeholder="position title"
              onChange={this.changeHandler}
              disabled={this.state.isComplete}
            />
            <input
              type="text"
              name="mainTasks"
              placeholder="main tasks"
              onChange={this.changeHandler}
              disabled={this.state.isComplete}
            />
            <input
              type="date"
              name="beginDate"
              placeholder="beginning date"
              onChange={this.changeHandler}
              disabled={this.state.isComplete}
            />
            <input
              type="date"
              name="endDate"
              placeholder="last date"
              onChange={this.changeHandler}
              disabled={this.state.isComplete}
            />
          </fieldset>
          {button}
        </form>
      </React.Fragment>
    );
  }
}

export default PracticalExperienceSection;
