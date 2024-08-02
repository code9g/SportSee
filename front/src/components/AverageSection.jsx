import useUser from "../hooks/useUser";
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
  const { user } = useUser();

  return (
    <section className="average">
      <Average user={user} />
    </section>
  );
}

export default AverageSection;
