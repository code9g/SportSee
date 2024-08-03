import PropTypes from "prop-types";

/**
 * Composant affiche un message indiquant l'absence de donnée.
 *
 * @component
 * @param {{message: string}} props Les propriétés du composant.
 * @param {string} [props.message="Pas de donnée"] Le message
 * @returns {JSX.Element} Un élément `div` avec le message.
 */
function NoData({ message = "Pas de donnée" }) {
  return <div className="no-data">{message}</div>;
}

NoData.propTypes = {
  message: PropTypes.string,
};

export default NoData;
