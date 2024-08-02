import useUser from "../hooks/useUser";
import { keys } from "../utils/consts";
import KeyMetric from "./KeyMetric";
import NoData from "./NoData";

/**
 * Composant pour afficher les métriques de l'utilisateur.
 *
 * Ce composant affiche les données de session de l'utilisateur.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetrics() {
  const { user } = useUser();

  if (!user.keyData) {
    return <NoData />;
  }

  return (
    <div className="metrics">
      {keys.map(({ key, label, icon, unit }, index) => (
        <KeyMetric
          key={index}
          label={label}
          icon={icon}
          unit={unit}
          value={user.keyData[key]}
        />
      ))}
    </div>
  );
}

export default KeyMetrics;
