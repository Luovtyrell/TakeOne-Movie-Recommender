import { useState } from "react";
import useMood from "../../hooks/useMood";
import { moods } from "../../data/moodData";
import MoodButton from "../Buttons/MoodButton/MoodButton";
import "./MoodCard.css";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";
import BackButton from "../Buttons/BackButton/BackButton";

function MoodCard() {
  const [selectedMood, setSelectedMood] = useState("");
  const { submitMood } = useMood();

  const handleMoodChange = (moodType) => {
    setSelectedMood(moodType);
  };

  const handleBack = () => {
    setSelectedMood("");
  };

  const selectedMoodData =
    moods.find((mood) => mood.type === selectedMood) ||
    moods.find((mood) => mood.type === "Default");
  const { background, image, title, gradient } = selectedMoodData;

  return (
    <div
      className={`container flex justify-center min-h-screen min-w-full p-4 ${background}`}>
      <div className="custom-card card shadow-2xl relative rounded-badge">
        <div className="figure-container">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="card-body relative z-10">
          <h2
            className={`card-title text-4xl font-semibold ${gradient} bg-clip-text text-transparent mt-0`}>
            {title}
          </h2>
          <div className="card-actions flex flex-wrap justify-center mt-4">
            {moods
              .filter((mood) => mood.type !== "Default")
              .map((mood) => (
                <MoodButton
                  key={mood.type}
                  mood={mood.type}
                  onClick={handleMoodChange}
                />
              ))}
          </div>
          {selectedMood && (
            <>
              <SubmitButton
                onClick={() => submitMood(selectedMood)}
                disabled={!selectedMood}
              />
              <BackButton onClick={handleBack} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
