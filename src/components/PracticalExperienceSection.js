import React, { Component } from "react";
import Practicalxperience from "./PracticalExperience";
import PracticalExperienceDisplay from "./PracticalExperienceDisplay";
import { v1 as uuidv1 } from "uuid";


class PracticalExperienceSection extends Component {
  praExp = {
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    beginDate: "",
    endDate: "",
    isComplete: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      practicalExperiences: [],
    };
    this.saveAll = this.saveAll.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteExprience = this.deleteExprience.bind(this);
  }

  saveAll(e) {
    e.preventDefault();
    let completedArray = this.state.practicalExperiences.map((element) => {
      let newObj = Object.assign({}, element, { isComplete: true });
      return newObj;
    });
    this.setState({ practicalExperiences: completedArray });
  }

  changeHandler(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = this.state.practicalExperiences.map((element) => {
      if (element.id == id) element[name] = value;
      return element;
    });
    this.setState({
      practicalExperiences: newArray,
    });
  }

  updateHandler(e, id) {
    e.preventDefault();

    let newArray = this.state.practicalExperiences.map((element) => {
      if (element.id == id) element.isComplete = false;
      return element;
    });
    this.setState({
      practicalExperiences: newArray,
    });
  }

  submitHandler(e, id) {
    e.preventDefault();
    let newArray = this.state.practicalExperiences.map((element) => {
      if (element.id == id) element.isComplete = true;
      return element;
    });
    this.setState({
      practicalExperiences: newArray,
    });
  }
  addExperience() {
    let newEduExp = Object.create(this.praExp);
    newEduExp.id = uuidv1();
    let cloneArray = [...this.state.practicalExperiences, newEduExp];
    this.setState({ practicalExperiences: cloneArray });
  }

  deleteExprience(e, i) {
    e.preventDefault();
    let filtredArray = this.state.practicalExperiences.filter(
      (element) => element.id != i
    );
    this.setState({ practicalExperiences: filtredArray });
  }

  render() {
    
    return( 
      <React.Fragment>
        <fieldset>
          <legend>Practical experience section</legend>
          <button style={{ marginLeft: "700px" }} onClick={this.addExperience}>
            Add practicale experience
          </button>
          {this.state.practicalExperiences.map((element) => {
            if (element.isComplete) {
              return (
                <PracticalExperienceDisplay
                  key={element.id}
                  {...element}
                  deleteExp={this.deleteExprience}
                  update={this.updateHandler}
                  index={element.id}
                />
              );
            }
            return (
              <Practicalxperience
                submit={this.saveAll}
                change={this.changeHandler}
                isComplete={element.isComplete}
                index={element.id}
                add={this.submitHandler}
                key={element.id}
                {...element}
              />
            );
          })}
        </fieldset>
        {this.state.practicalExperiences.length > 0 && (
          <button onClick={this.saveAll}>Save All</button>
        )}
    </React.Fragment>);
  }
}

export default PracticalExperienceSection;
