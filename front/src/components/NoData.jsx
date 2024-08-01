import PropTypes from "prop-types";

/**
 * Composant de donnée absente.
 *
 * Ce composant affiche un message indiqué l'absence de donnée.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {String} props.message - Le message
 *
 * @returns {JSX.Element} - Un élément `div` avec le message.
 */
function NoData({ message = "Pas de donnée" }) {
  return <div className="no-data">{message}</div>;
}

NoData.propTypes = {
  message: PropTypes.string,
};

export default NoData;
