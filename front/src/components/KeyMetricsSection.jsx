import PropTypes from "prop-types";

import KeyMetrics from "./KeyMetrics";
import NoData from "./NoData";

/**
 * Composant pour afficher les métriques de l'utilisateur dans une section.
 *
 * Ce composant affiche les données des métriques de l'utilisateur
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour lequel les données de performance sont affichées.
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetricsSection({ user }) {
  if (!user.keyData) {
    return <NoData />;
  }

  return (
    <section className="metrics">
      <KeyMetrics user={user} />
    </section>
  );
}

KeyMetricsSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default KeyMetricsSection;
