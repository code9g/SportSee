import PropTypes from "prop-types";

/**
 * Composant de tooltip personnalisé pour afficher la durée moyenne d'une session.
 *
 * Ce composant affiche une valeur avec l'unité "min" (minutes) lorsqu'un utilisateur survole un élément du graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.payload - Les données associées au tooltip. Chaque entrée contient une valeur à afficher.
 * @param {Boolean} props.active - Indique si le tooltip est actif (affiché).
 *
 * @returns {JSX.Element|null} - Un élément `div` avec la valeur et l'unité "min" si `payload` contient des données, sinon `null`.
 */
function AverageTooltip({ payload, active }) {
  if (active && payload.length) {
    return (
      <div className="tooltip">
        <p className="value">{payload[0].value} min</p>
      </div>
    );
  }

  return null;
}

AverageTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default AverageTooltip;
