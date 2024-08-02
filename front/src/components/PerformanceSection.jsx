import PropTypes from "prop-types";
import Performance from "./Performance";

/**
 * Composant pour afficher les performances de l'utilisateur sous forme de graphique radar dans
 * une section.
 *
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche en
 *  utilisant un graphique radar.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {number} props.user L'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {JSX.Element} Un élément JSX contenant le graphique radar.
 */
function PerformanceSection({ user }) {
  return (
    <section className="performance">
      <Performance user={user} />
    </section>
  );
}

PerformanceSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PerformanceSection;
