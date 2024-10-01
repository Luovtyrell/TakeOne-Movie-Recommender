import { useNavigate } from "react-router-dom";
import useMood from "../../hooks/useMood";

function MoodSubmitButton() {
  const { submitMood, selectedMood } = useMood();
  const navigate = useNavigate();

  const handleSubmit = () => {
    submitMood();
    navigate("/results");
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={!selectedMood}
      className={`btn btn-neutral rounded-lg w-full my-4 ${
        !selectedMood
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-her-red hover:text-black"
      }`}>
      Submit
    </button>
  );
}

export default MoodSubmitButton;
