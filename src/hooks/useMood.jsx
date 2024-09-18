import { useContext } from "react";
import MoodContext from "../context/MoodContext";

const useMood = () => {
  const context = useContext(MoodContext);
  if (context === null) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
};

export default useMood;
