import { useNavigate } from "react-router-dom";
import useMood from "../../hooks/useMood";
import BackButton from "../BackButton/BackButton";
import "./MoodCard.css";

function MoodCard() {
  const {
    selectedMoodData: { background, image, title, gradient },
    availableMoods,
    selectedMood,
    handleMoodChange,
    submitMood,
  } = useMood();

  const navigate = useNavigate();
  const handleSubmit = () => {
    submitMood();
    navigate("/results");
  };

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
              <button
                onClick={handleSubmit}
                disabled={!selectedMood}
                className="btn btn-full mt-4 btn-neutral">
                Submit
              </button>
              <BackButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
