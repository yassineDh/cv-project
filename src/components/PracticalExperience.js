import React, { Component } from "react";

export default class PracticalExperience extends Component {
  render() {
    let { isComplete, change, index, add } = this.props;
    return (
        
      <form onSubmit={(e) => add(e, index)}>
        <input
          type="text"
          name="companyName"
          placeholder="company name"
          onChange={(e) => change(e, index)}
          value={this.props.companyName}
        />
        <input
          type="text"
          name="positionTitle"
          placeholder="position title"
          onChange={(e) => change(e, index)}
          value={this.props.positionTitle}
        />
        <input
          type="text"
          name="mainTasks"
          placeholder="main tasks"
          onChange={(e) => change(e, index)}
          value={this.props.mainTasks}
        />
        <input
          type="date"
          name="beginDate"
          placeholder="beginning date"
          onChange={(e) => change(e, index)}
          value={this.props.beginDate}
        />
        <input
          type="date"
          name="endDate"
          placeholder="last date"
          onChange={(e) => change(e, index)}
          value={this.props.endDate}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
