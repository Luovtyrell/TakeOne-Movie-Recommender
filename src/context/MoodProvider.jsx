import { useState, useCallback, useMemo } from "react";
import MoodContext from "./MoodContext";
import PropTypes from "prop-types";
import { moods } from "../data/moodData";

const MoodProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("selectedMood") || "";
  });

  const submitMood = useCallback(() => {
    console.log(`Mood submitted: ${selectedMood}`);
    localStorage.setItem("selectedMood", selectedMood);
  }, [selectedMood]);

  const handleMoodChange = useCallback((mood) => {
    setSelectedMood(mood);
  }, []);

  const resetMood = useCallback(() => {
    setSelectedMood("");
    localStorage.removeItem("selectedMood");
  }, []);

  const selectedMoodData = useMemo(
    () =>
      moods.find((mood) => mood.type === selectedMood) ||
      moods.find((mood) => mood.type === "Default"),
    [selectedMood]
  );

  const availableMoods = useMemo(
    () => moods.filter((mood) => mood.type !== "Default"),
    []
  );

  const value = useMemo(
    () => ({
      selectedMood,
      selectedMoodData,
      availableMoods,
      handleMoodChange,
      resetMood,
      submitMood,
    }),
    [
      selectedMood,
      selectedMoodData,
      availableMoods,
      handleMoodChange,
      resetMood,
      submitMood,
    ]
  );

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
};

MoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoodProvider;
