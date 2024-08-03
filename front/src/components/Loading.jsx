import PropTypes from "prop-types";

/**
 * Ce composant affiche un message de chargement
 *
 * @component
 * @param {{message: string}} props Les propriétés du composant.
 * @param {string} [props.message="Chargement des données en cours..."] Le message de chargement
 * @returns {JSX.Element} Un élément `div` avec le message de chargement.
 */
function Loading({ message = "Chargement des données en cours..." }) {
  return <div className="loading">{message}</div>;
}

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
