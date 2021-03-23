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
    this.setState({ educationalExperiences: completedArray });
  }

  changeHandler(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = this.state.educationalExperiences.map((element) => {
      if (element.id == id) element[name] = value;
      return element;
    });
    this.setState({
      educationalExperiences: newArray,
    });
  }

  updateHandler(e,id) {
    e.preventDefault();
    
    let newArray = this.state.educationalExperiences.map((element) => {
      if (element.id == id) element.isComplete = false;
      return element;
    });
    this.setState({
      educationalExperiences: newArray,
    });
  }

  submitHandler(e, id) {
    e.preventDefault();
    let newArray = this.state.educationalExperiences.map((element) => {
      if (element.id == id) element.isComplete = true;
      return element;
    });
    this.setState({
      educationalExperiences: newArray,
    });
  }

  addExperience() {
    let newEduExp = Object.create(this.eduExp);
    newEduExp.id = uuidv1();
    let cloneArray = [...this.state.educationalExperiences, newEduExp];
    this.setState({ educationalExperiences: cloneArray });
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
        <fieldset>
        <legend>Educational experience section</legend>
        <button style={{marginLeft:"700px"}} onClick={this.addExperience}>Add educational experience</button>
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

        {this.state.educationalExperiences.length >0 && <button onClick={this.saveAll}>Save All</button>}
      </React.Fragment>
    );
  }
}

export default EducationalExperienceSection;
