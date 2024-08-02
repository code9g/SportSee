import Performance from "./Performance";

/**
 * Composant pour afficher les performances de l'utilisateur sous forme de graphique radar dans
 * une section.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant le graphique radar.
 */
function PerformanceSection() {
  return (
    <section className="performance-section">
      <Performance />
    </section>
  );
}

export default PerformanceSection;
