import React, { Component } from "react";

class EducationalExperience extends Component {
  render() {
    let { isComplete, update, change, index, add, deleteExp} = this.props;
    let button = isComplete ? (
      <button type="button" onClick={update}>
        Update
      </button>
    ) : (
      <button type="submit">Add</button>
    );

    let buttonDel = isComplete && <button onClick ={(e)=>deleteExp(e,index)}>Delete</button>;
    return (
      <React.Fragment>
        <form onSubmit={(e) => add(e, index)}>

          <legend>Educational experience section</legend>
          <input
            type="text"
            name="schoolName"
            placeholder="school name"
            onChange={(e) => change(e, index)}
            disabled={isComplete}
          />
          <input
            type="text"
            name="titleStudy"
            placeholder="title of study"
            onChange={(e) => change(e, index)}
            disabled={isComplete}
          />
          <input
            type="date"
            name="beginDate"
            placeholder="beginning date"
            onChange={(e) => change(e, index)}
            disabled={isComplete}
          />
          <input
            type="date"
            name="endDate"
            placeholder="last date"
            onChange={(e) => change(e, index)}
            disabled={isComplete}
          />

          {button}
          {buttonDel}
        </form>
      </React.Fragment>
    );
  }
}

export default EducationalExperience;
