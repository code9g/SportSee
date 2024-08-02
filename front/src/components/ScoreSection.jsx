import PropTypes from "prop-types";
import Score from "./Score";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial dans
 * une section.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour lequel afficher le score.
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function ScoreSection({ user }) {
  return (
    <section className="score">
      <Score user={user} />
    </section>
  );
}

ScoreSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ScoreSection;
