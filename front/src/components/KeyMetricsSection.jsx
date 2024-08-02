import PropTypes from "prop-types";

import KeyMetrics from "./KeyMetrics";

/**
 * Composant pour afficher les métriques de l'utilisateur dans une section.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetricsSection() {
  return (
    <section className="metrics">
      <KeyMetrics />
    </section>
  );
}

KeyMetricsSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default KeyMetricsSection;
