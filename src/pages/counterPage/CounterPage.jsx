import Counter from "../../components/Counter/Counter";
import { Link } from "react-router-dom";

function CounterPage() {
  return (
    <div className="flex flex-col items-center pt-8 bg-gray-100 min-h-screen">
      <p className="text-center underline decoration-indigo-500 mb-4">
        REACT + VITE + PROPTYPES + REACT-ROUTER + TAILWIND STARTER
      </p>
      <p className="text-lg mb-8">Counter Page</p>
      <div className="mb-8">
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">
          Home
        </Link>
      </div>
      <Counter />
    </div>
  );
}

export default CounterPage;
