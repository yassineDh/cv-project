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

    // this.submitHandler = this.submitHandler.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
    // this.updateHandler = this.updateHandler.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  // submitHandler(e) {
  //   e.preventDefault();
  //   console.log(this.state);
  //   // this.setState({
  //   //   educationalExperiences[i].isComplete: true;
  //   // });
  //   this.setState((prevState)=>({
  //     prevState.educationalExperiences[i].isComplete: true;
  //   }));
  // }

  // changeHandler(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }
  // updateHandler(e) {
  //   e.preventDefault();
  //   console.log("inside update");
  //   this.setState({
  //     isComplete: false,
  //   });
  // }

  addExperience() {
    // let prevArr = this.state.educationalExperiences.slice(0);
    // let newArr = prevArr.push(this.eduExp);
    let cloneArray = [...this.state.educationalExperiences, this.eduExp];
    this.setState(
      { educationalExperiences: cloneArray },
      console.log(this.state)
    );
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.addExperience}>Add educational experience</button>
        {/* <EducationalExperience update={this.updateHandler} submit={this.submitHandler} change={this.changeHandler} isComplete={this.state.isComplete}/> */}
        {/* {this.state.educationalExperiences.map((element,index) =><EducationalExperience update={this.updateHandler} submit={this.submitHandler} change={this.changeHandler} isComplete={element.isComplete}/>  )} */}
      </React.Fragment>
    );
  }
}

export default EducationalExperienceSection;
