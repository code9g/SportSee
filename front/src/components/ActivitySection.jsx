import useUser from "../hooks/useUser";
import Activity from "./Activity";

/**
 * Composant pour afficher l'activité quotidienne de l'utilisateur sous forme de graphique à barres,
 * dans une section
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant la section et le graphique à barres.
 */
function ActivitySection() {
  const { user } = useUser();

  return (
    <section className="activity">
      <Activity user={user} />
    </section>
  );
}

export default ActivitySection;
