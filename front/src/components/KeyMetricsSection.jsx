import PropTypes from "prop-types";

import { keys } from "../utils/consts";
import KeyMetric from "./KeyMetric";
import NoData from "./NoData";

/**
 * Composant pour afficher les métriques de l'utilisateur.
 *
 * Ce composant affiche les données de session de l'utilisateur.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {number} props.user L'utilisateur pour lequel les données de performance sont affichées.
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetricsSection({ user }) {
  if (!user.keyData) {
    return <NoData />;
  }

  return (
    <section className="metrics">
      {keys.map(({ key, label, icon, unit }, index) => (
        <KeyMetric
          key={index}
          label={label}
          icon={icon}
          unit={unit}
          value={user.keyData[key]}
        />
      ))}
    </section>
  );
}

KeyMetricsSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default KeyMetricsSection;
