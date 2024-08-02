import Score from "./Score";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial dans
 * une section.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function ScoreSection() {
  return (
    <section className="score-section">
      <Score />
    </section>
  );
}

export default ScoreSection;
