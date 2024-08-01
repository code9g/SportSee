import PropTypes from "prop-types";

/**
 * Composant d'erreur personnalisé.
 *
 * Ce composant affiche un message d'erreur personnalisé.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {String} props.message Le message d'erreur.
 * @returns {JSX.Element} Un élément `div` avec le message d'erreur.
 */
function Error({ message }) {
  return <div className="error">{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
