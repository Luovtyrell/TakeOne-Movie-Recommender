import useMood from "../../hooks/useMood";
import BackButton from "../Buttons/BackButton";
import MoodSubmitButton from "../Buttons/MoodSubmitButton";
import "./MoodCard.css";

function MoodCard() {
  const {
    selectedMoodData: { background, image, title, gradient },
    availableMoods,
    selectedMood,
    handleMoodChange,
  } = useMood();

  return (
    <div
      className={`container flex justify-center min-h-screen min-w-full p-4 transition-all duration-300 ${background}`}>
      <div className="custom-card card shadow-2xl relative rounded-badge">
        <div className="figure-container relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="card-body relative z-10">
          <h2
            className={`card-title text-4xl font-semibold ${gradient} bg-clip-text text-transparent -mt-24 relative z-10`}>
            {title}
          </h2>
          <div className="card-actions flex flex-wrap justify-center mt-4">
            {availableMoods.map((mood) => (
              <button
                key={mood.type}
                onClick={() => handleMoodChange(mood.type)}
                className="btn btn-sm">
                {mood.type}
              </button>
            ))}
          </div>
          {selectedMood && (
            <>
              <MoodSubmitButton />
              <BackButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
