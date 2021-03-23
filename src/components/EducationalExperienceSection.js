import React, { Component } from "react";
import EducationalExperience from "./EducationalExperience";

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

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  submitHandler(e) {
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

  changeHandler(e, i) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = this.state.educationalExperiences.map((element, index) => {
      if (index == i) {
        element[name] = value
      }

      return element;
    })
    this.setState({
      educationalExperiences: newArray
    });
  }
  updateHandler(e) {
    e.preventDefault();
    console.log("inside update");
    this.setState({
      isComplete: false,
    });
  }

  addExperience() {
    // let prevArr = this.state.educationalExperiences.slice(0);
    // let newArr = prevArr.push(this.eduExp);
    let newEduExp = Object.create(this.eduExp);
    let cloneArray = [...this.state.educationalExperiences, newEduExp];
    this.setState(
      { educationalExperiences: cloneArray },
      console.log(this.state)
    );
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.addExperience}>Add educational experience</button>
        <button onClick={this.submitHandler}>test</button>
        {/* <EducationalExperience update={this.updateHandler} submit={this.submitHandler} change={this.changeHandler} isComplete={this.state.isComplete}/> */}
        {this.state.educationalExperiences.map((element, index) => <EducationalExperience update={this.updateHandler} submit={this.submitHandler} change={this.changeHandler} isComplete={element.isComplete} index={index} />)}
      </React.Fragment>
    );
  }
}

export default EducationalExperienceSection;
