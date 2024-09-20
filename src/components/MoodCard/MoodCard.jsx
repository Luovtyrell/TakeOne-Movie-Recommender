import useMood from "../../hooks/useMood";
import ActionButton from "../ActionButton/ActionButton";
import "./MoodCard.css";

function MoodCard() {
  const {
    selectedMoodData,
    availableMoods,
    selectedMood,
    handleMoodChange,
    resetMood,
    submitMood,
  } = useMood();

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
            {availableMoods.map((mood) => (
              <ActionButton
                key={mood.type}
                onClick={() => handleMoodChange(mood.type)}
                size="btn-sm">
                {mood.type}
              </ActionButton>
            ))}
          </div>
          {selectedMood && (
            <>
              <ActionButton
                onClick={submitMood}
                disabled={!selectedMood}
                className="wide w-full mt-4">
                Submit
              </ActionButton>
              <ActionButton onClick={resetMood} size="btn-md">
                ← Back
              </ActionButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
