import React, { Component } from "react";

export default class PracticalExperienceDisplay extends Component {
  render() {
    
    let {
      companyName,
      positionTitle,
      mainTasks,
      beginDate,
      endDate,
      deleteExp,
      update,
      index,
    } = this.props;
    return (
      <div>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {companyName}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {positionTitle}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {mainTasks}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {beginDate}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {endDate}
        </span>
        <button
          type="button"
          onClick={(e) => update(e, index)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Update
        </button>
        <button
          type="button"
          onClick={(e) => deleteExp(e, index)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Delete
        </button>
      </div>
    );
  }
}
