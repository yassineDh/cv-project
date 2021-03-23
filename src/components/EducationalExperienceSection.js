import React, { Component } from "react";
import EducationalExperience from "./EducationalExperience";
import { v1 as uuidv1 } from "uuid";

class EducationalExperienceSection extends Component {
  eduExp = {
    schoolName: "",
    titleStudy: "",
    beginDate: "",
    endDate: "",
    isComplete: false,
  };
  constructor(props) {
    super(props);

    this.state = {
      educationalExperiences: [],
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
    let completedArray = this.state.educationalExperiences.map((element) => {
      let newObj = Object.assign({}, element, { isComplete: true });
      return newObj;
    });
    this.setState(
      { educationalExperiences: completedArray },
      console.log(this.state)
    );
  }

  changeHandler(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = this.state.educationalExperiences.map((element) => {
      if (element.id == id) {
        element[name] = value;
      }

      return element;
    });
    this.setState({
      educationalExperiences: newArray,
    });
  }
  updateHandler(e) {
    e.preventDefault();
    console.log("inside update");
    this.setState({
      isComplete: false,
    });
  }

  submitHandler(e, id) {
    e.preventDefault();
    let newArray = this.state.educationalExperiences.map((element) => {
      if (element.id == id) {
        element.isComplete = true;
      }

      return element;
    });
    this.setState({
      educationalExperiences: newArray,
    });
  }

  addExperience() {
    // let prevArr = this.state.educationalExperiences.slice(0);
    // let newArr = prevArr.push(this.eduExp);
    let newEduExp = Object.create(this.eduExp);
    newEduExp.id = uuidv1();
    let cloneArray = [...this.state.educationalExperiences, newEduExp];
    this.setState(
      { educationalExperiences: cloneArray },
      console.log(this.state)
    );
  }

  deleteExprience(e, i) {
    e.preventDefault();
    let filtredArray = this.state.educationalExperiences.filter(
      (element) => element.id != i
    );
    this.setState({ educationalExperiences: filtredArray });
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.addExperience}>Add educational experience</button>

        {/* <EducationalExperience update={this.updateHandler} submit={this.saveAll} change={this.changeHandler} isComplete={this.state.isComplete}/> */}
        <fieldset>
          {this.state.educationalExperiences.map((element) => (
            <EducationalExperience
              update={this.updateHandler}
              submit={this.saveAll}
              change={this.changeHandler}
              isComplete={element.isComplete}
              index={element.id}
              add={this.submitHandler}
              deleteExp={this.deleteExprience}
              key={element.id}
            />
          ))}
        </fieldset>

        <button onClick={this.saveAll}>Save All</button>
      </React.Fragment>
    );
  }
}

export default EducationalExperienceSection;
