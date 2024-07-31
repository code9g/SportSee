import PropTypes from "prop-types";

const units = { kilogram: "kg", calories: "kCal" };

/**
 * Composant de tooltip personnalisé pour afficher des informations sur une activité.
 *
 * Ce composant affiche des informations contextuelles dans un tooltip lorsque la souris est sur un élément du graphique.
 * Il gère les unités pour différents types de données (poids, calories, etc.).
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.payload - Les données associées au tooltip, chaque entrée contient la valeur et la clé de données.
 * @param {boolean} props.active - Indique si le tooltip est actif (affiché).
 * @returns {JSX.Element|null} - Un élément `div` avec les informations du tooltip si `active` est vrai et `payload` contient des données, sinon `null`.
 */
function ActivityTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="activity-tooltip">
        {payload.map(({ dataKey, value }, index) => (
          <p key={index}>
            {value}
            {units[dataKey] ?? ""}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

ActivityTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default ActivityTooltip;
