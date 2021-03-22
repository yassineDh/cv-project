import React, { Component } from "react";

class EducationalExperience extends Component {
  render() {
    let { isComplete, update, submit, change } = this.props;
    let button = isComplete ? (
      <button type="button" onClick={update}>
        Update
      </button>
    ) : (
      <button type="submit">Add</button>
    );
    return (
      <React.Fragment>
        <form onSubmit={submit}>
          <fieldset>
            <legend>Educational experience section</legend>
            <input
              type="text"
              name="schoolName"
              placeholder="school name"
              onChange={change}
              disabled={isComplete}
            />
            <input
              type="text"
              name="titleStudy"
              placeholder="title of study"
              onChange={change}
              disabled={isComplete}
            />
            <input
              type="date"
              name="beginDate"
              placeholder="beginning date"
              onChange={change}
              disabled={isComplete}
            />
            <input
              type="date"
              name="endDate"
              placeholder="last date"
              onChange={change}
              disabled={isComplete}
            />
          </fieldset>
          {button}
        </form>
      </React.Fragment>
    );
  }
}

export default EducationalExperience;
