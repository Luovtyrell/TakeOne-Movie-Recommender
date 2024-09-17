import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center pt-16 bg-gray-100 min-h-screen">
      <div className="text-center">
        <p className="text-indigo-700 mb-4 uppercase">Counter:</p>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default Counter;
