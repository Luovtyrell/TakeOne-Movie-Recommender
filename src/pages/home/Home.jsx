import { Link } from "react-router-dom";
import Greeting from "../../components/Greetings/Greetings";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-center underline decoration-indigo-500 mb-4">
        REACT + VITE + PROPTYPES + REACT-ROUTER + TAILWIND STARTER
      </p>
      <p className="text-lg mb-8">Home page</p>
      <div className="space-y-4">
        <Link
          to="/CounterPage"
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">
          Counter Page
        </Link>
      </div>
      <Greeting name="Stranger" age={242354324} />
    </div>
  );
}

export default Home;
