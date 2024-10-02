import PropTypes from "prop-types";
import { OctagonAlert } from "lucide-react";
import BackButton from "../Buttons/BackButton";

function Error({ message }) {
  return (
    <>
      <div className="flex justify-center items-center mt-8 mb-9">
        <OctagonAlert className="text-her-red mr-2" size={30} />
        <p className="text-3xl font-bold text-her-red">{message}</p>
      </div>
      <div className="container items-center mb-4 ml-5">
        <BackButton />
      </div>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
