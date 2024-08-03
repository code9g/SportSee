import PropTypes from "prop-types";

/**
 * Ce composant affiche un message d'erreur personnalisé.
 *
 * @component
 * @param {{message: string}} props Les propriétés du composant.
 * @param {string} [props.message="Une erreur inconnue à eu lieu !"] Le message d'erreur.
 * @returns {JSX.Element} Un élément `div` avec le message d'erreur.
 */
function Error({ message = "Une erreur inconnue à eu lieu !" }) {
  return <div className="error">{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
