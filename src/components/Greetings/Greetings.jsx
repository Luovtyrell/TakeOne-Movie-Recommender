import PropTypes from "prop-types";

function Greeting({ name, age }) {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <p className="text-2xl font-bold text-indigo-600 mb-2">Hello, {name}!</p>
      <p className="text-lg text-gray-700">You are {age} years old.</p>
      <a
        className="underline decoration-indigo-600"
        href="https://github.com/Luovtyrell">
        @Luovtyrell
      </a>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Greeting;
