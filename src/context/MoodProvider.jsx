import { useState } from "react";
import MoodContext from "./MoodContext";
import PropTypes from "prop-types";

const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("");

  const submitMood = (selectedMood) => {
    setMood(selectedMood);
    console.log(`Mood submitted: ${selectedMood}`);
  };

  return (
    <MoodContext.Provider value={{ mood, submitMood }}>
      {children}
    </MoodContext.Provider>
  );
};

MoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoodProvider;
