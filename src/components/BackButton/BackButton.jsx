import { useNavigate } from "react-router-dom";
import useMood from "../../hooks/useMood";

function BackButton() {
  const navigate = useNavigate();
  const { resetMood } = useMood();

  const handleBack = () => {
    resetMood();
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className="btn btn-square">
      ← Back
    </button>
  );
}

export default BackButton;
