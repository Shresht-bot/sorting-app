import React, { useState } from "react";
import Work from "./components/Work.js";
import TutorialModal from "./components/Tutorial/TutorialModal.js";

const App = () => {
  const [check, settutorial] = useState(true);

  const tutorialhandler = () => {
    settutorial(false);
  };
  return (
    <React.Fragment>
      {check && <TutorialModal onConfirm={tutorialhandler} />}
      <h1>SORTING ALGORITHMS</h1>
      <Work />
    </React.Fragment>
  );
};
export default App;
