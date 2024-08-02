import PropTypes from "prop-types";

import useUser from "../hooks/useUser";
import KeyMetrics from "./KeyMetrics";
import NoData from "./NoData";

/**
 * Composant pour afficher les métriques de l'utilisateur dans une section.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetricsSection() {
  const { user } = useUser();

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
