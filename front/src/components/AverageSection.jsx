import Average from "./Average";

/**
 * Composant pour afficher la durée moyenne des sessions de l'utilisateur sous forme de graphique linéaire
 * dans une section.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant le graphique linéaire et le titre associé.
 */
function AverageSection() {
  return (
    <section className="average-section">
      <Average />
    </section>
  );
}

export default AverageSection;
