import PropTypes from "prop-types";

function Error({ message }) {
  return <div>{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
