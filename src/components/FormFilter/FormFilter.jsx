import useMood from "../../hooks/useMood";

function Formulario() {
  const { selectedMood } = useMood();

  return (
    <div className="filter-form p-4 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Additional Filters</h2>
      <p className="text-lg">
        I am... <span className="font-bold">{selectedMood}</span>
      </p>
    </div>
  );
}

export default Formulario;
