import PropTypes from "prop-types";

import Activity from "./Activity";

/**
 * Composant pour afficher l'activité quotidienne de l'utilisateur sous forme de graphique à barres,
 * dans une section
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur dont les données d'activité sont récupérées.
 * @returns {JSX.Element} Un élément JSX contenant la section et le graphique à barres.
 */
function ActivitySection({ user }) {
  return (
    <section className="activity">
      <Activity user={user} />
    </section>
  );
}

ActivitySection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ActivitySection;
