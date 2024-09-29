import { useNavigate } from "react-router-dom";
import useMood from "../../hooks/useMood";
import { ChevronLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();
  const { resetMood } = useMood();

  const handleBack = () => {
    resetMood();
    navigate("/");
  };

  return (
    <div className="flex mt-1">
      <button onClick={handleBack} className="btn flex items-center">
        <ChevronLeft className="text-her-red" />
        Back
      </button>
    </div>
  );
}

export default BackButton;
