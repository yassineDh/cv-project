import GeneralInformation from "./components/GeneralInformation";
import EducationalExperienceSection from "./components/EducationalExperienceSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>CV application</h2>
      <GeneralInformation />
      <EducationalExperienceSection />
      <PracticalExperienceSection />
    </div>
  );
}

export default App;
